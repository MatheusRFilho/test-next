import AnnouncementsTable from '@/components/AnnouncementTable';
import { formatNumber } from '@/helpers/format';
import { Announcement } from '@/types/announcements';
import { useEffect, useState } from 'react';

function Home() {
  const [data, setData] = useState<Announcement[]>([]);
  const [filteredData, setFilteredData] = useState<Announcement[]>([]);
  const [totalValue, setTotalValue] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [totalProfit, setTotalProfit] = useState<number>(0);
  const [totalUnitsSold, setTotalUnitsSold] = useState<number>(0);
  const [averageTicket, setAverageTicket] = useState<number>(0);
  const [cancelledSalesValue, setCancelledSalesValue] = useState<number>(0);
  const [cancelledSalesQuantity, setCancelledSalesQuantity] = useState<number>(0);

  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    fetchData();
  }, []);


  

  useEffect(() => {

    const filterData = () => {
      const filtered = data.filter((announcement) =>
        announcement.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        announcement.sku.toLowerCase().includes(searchTerm.toLowerCase()) ||
        announcement.ads_id.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
      calculateStatistics(filtered);
    };

    filterData();
  }, [data, searchTerm ]);

   async function fetchData() {
    try {
      const response = await fetch('/api/announcements');
      const jsonData: Announcement[] = await response.json(); 
      console.log(jsonData)
      setData(jsonData);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  }

  

  const calculateStatistics = (announcements: Announcement[]): void => {
    let calculatedTotalValue = 0;
    let calculatedTotalCost = 0;
    let calculatedTotalProfit = 0;
    let calculatedTotalUnitsSold = 0;
    let calculatedCancelledSalesValue = 0;
    let calculatedCancelledSalesQuantity = 0;

    announcements.forEach((announcement) => {
      calculatedTotalValue += announcement.total_value;
      calculatedTotalCost += announcement.total_cost;
      calculatedTotalProfit += announcement.profit_value;
      calculatedTotalUnitsSold += announcement.quantity;

      if (!announcement.is_registered) {
        calculatedCancelledSalesValue += announcement.total_value;
        calculatedCancelledSalesQuantity += announcement.quantity;
      }
    });

    const calculatedAverageTicket = calculatedTotalValue / calculatedTotalUnitsSold;

    setTotalValue(calculatedTotalValue);
    setTotalCost(calculatedTotalCost);
    setTotalProfit(calculatedTotalProfit);
    setTotalUnitsSold(calculatedTotalUnitsSold);
    setAverageTicket(calculatedAverageTicket);
    setCancelledSalesValue(calculatedCancelledSalesValue);
    setCancelledSalesQuantity(calculatedCancelledSalesQuantity);
  };
  
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <div className="container mx-auto">
        <h1 className='mx-auto mt-5 text-5xl dark:text-gray-900 text-center'>Dados do Arquivo</h1>
        <div  className="border-b border-gray-200">                   
          <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-gray-900 sm:p-8" >
            <div className="flex flex-col">
              <dt className="mb-2 text-3xl font-extrabold">{formatNumber(totalValue)}</dt>
              <dd className="text-gray-500 dark:text-gray-400">Total de vendas (R$)</dd>
            </div>
          <div className="flex flex-col">
              <dt className="mb-2 text-3xl font-extrabold">{formatNumber(totalCost)}</dt>
              <dd className="text-gray-500 dark:text-gray-400">Total de custo (R$)</dd>
            </div>
            <div className="flex flex-col">
            <dt className="mb-2 text-3xl font-extrabold">{formatNumber(totalProfit)}</dt>
              <dd className="text-gray-500 dark:text-gray-400">Total de lucro (R$)</dd>
            </div>
          </dl>
          <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-gray-900 sm:p-8" >
            <div className="flex flex-col">
              <dt className="mb-2 text-3xl font-extrabold">{totalUnitsSold}</dt>
              <dd className="text-gray-500 dark:text-gray-400">Total de unidades vendidas</dd>
            </div>
          <div className="flex flex-col">
              <dt className="mb-2 text-3xl font-extrabold">{formatNumber(averageTicket)}</dt>
              <dd className="text-gray-500 dark:text-gray-400">Valor médio de vendas (R$)</dd>
            </div>
            <div className="flex flex-col">
            <dt className="mb-2 text-3xl font-extrabold">{cancelledSalesQuantity}</dt>
              <dd className="text-gray-500 dark:text-gray-400">Total de vendas canceladas</dd>
            </div>
            <div className="flex flex-col">
            <dt className="mb-2 text-3xl font-extrabold">{formatNumber(cancelledSalesValue)}</dt>
              <dd className="text-gray-500 dark:text-gray-400">Valor total de vendas canceladas (R$)</dd>
            </div>
            
          </dl>
        </div>
        <input
          type="text"
          placeholder="Pesquisar por id, nome ou SKU"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full my-4 p-2 border border-gray-300 rounded-md"
        />
      
      </div>
      <AnnouncementsTable announcements={filteredData} />
    </div>
  );
}

export default Home;