
import { Announcement } from '@/types/announcements';
import { useState } from 'react';
import { formatDate, formatNumber } from '@/helpers/format';

interface AnnouncementRowProps {
  announcement: Announcement;
}

const AnnouncementRow: React.FC<AnnouncementRowProps> = ({ announcement }) => {
  const [showDetails, setShowDetails] = useState<boolean>(false);
  
  const [whatInfo, setWhatInfo] = useState<string>('sales');
  const [information, setInformation] = useState<string>('order_group');

  return (
    <>
      <tr className='border-b border-blue-gray-200'>
        <td className="py-3 px-4 font-medium">{announcement.ads_id}</td>
        <td className="py-3 px-4 font-medium">{announcement.name}</td>
        <td className="py-3 px-4 font-medium">{announcement.sku}</td>
        <td className="py-3 px-4 font-medium">
          <button
            className="text-blue-500"
            onClick={() => setShowDetails(!showDetails)}
          >
            {showDetails ? 'Ocultar Detalhes' : 'Expandir Detalhes'}
          </button>
        </td>
      </tr>
      {showDetails && (
        <>
          <tr>
            <td colSpan={4}>
              <div className="flex justify-center w-full bg-white border border-gray-200 rounded-t-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-2 mt-4 text-white">Pedidos</h3>
              </div>
              <div className="w-full bg-white border border-gray-200 rounded-b-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800">
                  <li className="me-2">
                    <button type="button" onClick={() => setInformation('order_group')} className={information === 'order_group' ? `inline-block p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500` : `inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300`}>Grupos de pedidos</button>
                  </li>
                  <li className="me-2">
                    <button type="button" onClick={() => setInformation('order_details')} className={information === 'order_details' ? `inline-block p-4 text-blue-600 rounded-sm-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500` : `inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300`}>Detalhes dos pedidos</button>
                  </li>
                </ul>
                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800">
                  <li className="me-2">
                    <button type="button" onClick={() => setWhatInfo('sales')} className={whatInfo === 'sales' ? `inline-block p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500` : `inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300`}>Vendas</button>
                  </li>
                  <li className="me-2">
                    <button type="button" onClick={() => setWhatInfo('discount')} className={whatInfo === 'discount' ? `inline-block p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500` : `inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300`}>Descontos</button>
                  </li>
                  <li className="me-2">
                    <button type="button" onClick={() => setWhatInfo('cost')} className={whatInfo === 'cost' ? `inline-block p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500` : `inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300`}>Custos</button>
                  </li>
                  <li className="me-2">
                    <button type="button" onClick={() => setWhatInfo('impost')} className={whatInfo === 'impost' ? `inline-block p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500` : `inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300`}>Imposto</button>
                  </li>
                  <li className="me-2">
                    <button type="button" onClick={() => setWhatInfo('receipt')} className={whatInfo === 'receipt' ? `inline-block p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500` : `inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300`}>Receita</button>
                  </li>
                  <li className="me-2">
                    <button type="button" onClick={() => setWhatInfo('profit')} className={whatInfo === 'profit' ? `inline-block p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500` : `inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300`}>Lucro</button>
                  </li>
                  <li className="me-2">
                    <button type="button" onClick={() => setWhatInfo('margin')} className={whatInfo === 'margin' ? `inline-block p-4 text-blue-600 rounded-ss-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500` : `inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300`}>Margem</button>
                  </li>
                </ul>
                <div>
                  <div className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800" >
                    {
                      information === 'order_group' ? 
                      announcement.orders_group.map((item, index) => {
                      
                        if (whatInfo === 'sales') {
                          return (
                            <div key={index} className="border-b border-gray-200">
                              
                              <dl className="grid max-w-screen-xl grid-cols-2 gap-8 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8" >
                              
                              <div className="flex flex-col">
                                  <dt className="mb-2 text-3xl font-extrabold">{item.order_id}</dt>
                                  <dd className="text-gray-500 dark:text-gray-400">id</dd>
                              </div>
                              
                            </dl>
                              <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8" >
                              
                                <div className="flex flex-col">
                                    <dt className="mb-2 text-3xl font-extrabold">{item.quantity}</dt>
                                    <dd className="text-gray-500 dark:text-gray-400">Quantidade</dd>
                                </div>
                                <div className="flex flex-col">
                                    <dt className="mb-2 text-3xl font-extrabold">{formatNumber(item.value)}</dt>
                                    <dd className="text-gray-500 dark:text-gray-400">Valor (R$)</dd>
                                </div>
                                <div className="flex flex-col">
                                    <dt className="mb-2 text-3xl font-extrabold">{formatNumber(item.total_value)}</dt>
                                    <dd className="text-gray-500 dark:text-gray-400">Valor Total  (R$)</dd>
                                </div>
                              </dl>
                            </div>
                          )
                        }
                          else if (whatInfo === 'discount') {
                          return (
                            <div key={index} className="border-b border-gray-200">
                              <dl className="grid max-w-screen-xl grid-cols-2 gap-8  mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8" >
                              
                              <div className="flex flex-col">
                                  <dt className="mb-2 text-3xl font-extrabold">{item.order_id}</dt>
                                  <dd className="text-gray-500 dark:text-gray-400">id</dd>
                              </div>
                              
                            </dl>
                              <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8" >
                                <div className="flex flex-col">
                                    <dt className="mb-2 text-3xl font-extrabold">{item.tax}</dt>
                                    <dd className="text-gray-500 dark:text-gray-400">Tarifa</dd>
                                </div>
                                <div className="flex flex-col">
                                    <dt className="mb-2 text-3xl font-extrabold">{formatNumber(item.shipping_price)}</dt>
                                    <dd className="text-gray-500 dark:text-gray-400">Preço do frete(R$)</dd>
                                </div>
                                <div className="flex flex-col">
                                    <dt className="mb-2 text-3xl font-extrabold">{formatNumber(item.shipping_discount)}</dt>
                                    <dd className="text-gray-500 dark:text-gray-400">Desconto do frete (R$)</dd>
                                </div>
                                <div className="flex flex-col">
                                    <dt className="mb-2 text-3xl font-extrabold">{formatNumber(item.shipping_payed)}</dt>
                                    <dd className="text-gray-500 dark:text-gray-400">Frete pago (R$)</dd>
                                </div>
                              </dl>
                            </div>
                          )
                        }
                        else if (whatInfo === 'cost') {
                          return (
                            <div key={index} className="border-b border-gray-200">
                              <dl className="grid max-w-screen-xl grid-cols-2 gap-8  mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8" >
                              
                              <div className="flex flex-col">
                                  <dt className="mb-2 text-3xl font-extrabold">{item.order_id}</dt>
                                  <dd className="text-gray-500 dark:text-gray-400">id</dd>
                              </div>
                              
                            </dl>
                              <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8" >
                                <div className="flex flex-col">
                                    <dt className="mb-2 text-3xl font-extrabold">{formatNumber(item.cost)}</dt>
                                    <dd className="text-gray-500 dark:text-gray-400">Unitario (R$)</dd>
                                </div>
                                <div className="flex flex-col">
                                    <dt className="mb-2 text-3xl font-extrabold">{formatNumber(item.total_cost)}</dt>
                                    <dd className="text-gray-500 dark:text-gray-400">Total (R$)</dd>
                                </div>
                                
                              </dl>
                            </div>
                          )
                        }
                        else if (whatInfo === 'impost') {
                          return (
                            <div key={index} className="border-b border-gray-200">
                              <dl className="grid max-w-screen-xl grid-cols-2 gap-8  mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8" >
                              
                              <div className="flex flex-col">
                                  <dt className="mb-2 text-3xl font-extrabold">{item.order_id}</dt>
                                  <dd className="text-gray-500 dark:text-gray-400">id</dd>
                              </div>
                              
                            </dl>
                              <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8" >
                                <div className="flex flex-col">
                                    <dt className="mb-2 text-3xl font-extrabold">{formatNumber(item.sale_fee)}</dt>
                                    <dd className="text-gray-500 dark:text-gray-400">Imposto (R$)</dd>
                                </div>
                              </dl>
                            </div>
                          )
                        }
                        else if (whatInfo === 'receipt') {
                          return (
                            <div key={index} className="border-b border-gray-200">
                              <dl className="grid max-w-screen-xl grid-cols-2 gap-8  mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8" >
                              
                              <div className="flex flex-col">
                                  <dt className="mb-2 text-3xl font-extrabold">{item.order_id}</dt>
                                  <dd className="text-gray-500 dark:text-gray-400">id</dd>
                              </div>
                              
                            </dl>
                              <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8" >
                                <div className="flex flex-col">
                                    <dt className="mb-2 text-3xl font-extrabold">{formatNumber(item.income)}</dt>
                                    <dd className="text-gray-500 dark:text-gray-400">Receita (R$)</dd>
                                </div>
                              </dl>
                            </div>
                          )
                        } 
                        else if (whatInfo === 'profit') {
                          return (
                            <div key={index} className="border-b border-gray-200">
                              <dl className="grid max-w-screen-xl grid-cols-2 gap-8 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8" >
                              
                              <div className="flex flex-col">
                                  <dt className="mb-2 text-3xl font-extrabold">{item.order_id}</dt>
                                  <dd className="text-gray-500 dark:text-gray-400">id</dd>
                              </div>
                              
                            </dl>
                              <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8" >
                                <div className="flex flex-col">
                                    <dt className="mb-2 text-3xl font-extrabold">{formatNumber(item.profit_sale)}</dt>
                                    <dd className="text-gray-500 dark:text-gray-400">Venda (R$)</dd>
                                </div>
                                <div className="flex flex-col">
                                    <dt className="mb-2 text-3xl font-extrabold">{formatNumber(item.profit_item)}</dt>
                                    <dd className="text-gray-500 dark:text-gray-400">Item (R$)</dd>
                                </div>
                                <div className="flex flex-col">
                                    <dt className="mb-2 text-3xl font-extrabold">{formatNumber(item.profit_value)}</dt>
                                    <dd className="text-gray-500 dark:text-gray-400">Total (R$)</dd>
                                </div>
                                
                              </dl>
                            </div>
                          )
                        } 
                        else if (whatInfo === 'margin') {
                          return (
                            <div key={index} className="border-b border-gray-200">
                              <dl className="grid max-w-screen-xl grid-cols-2 gap-8  mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8" >
                              
                              <div className="flex flex-col">
                                  <dt className="mb-2 text-3xl font-extrabold">{item.order_id}</dt>
                                  <dd className="text-gray-500 dark:text-gray-400">id</dd>
                              </div>
                              
                            </dl>
                              <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8" >
                                <div className="flex flex-col">
                                <dt className="mb-2 text-3xl font-extrabold">{formatNumber((((item.income) / (item.total_cost)) * 100) || 0)}%</dt>

                                    <dd className="text-gray-500 dark:text-gray-400">ROI (%)</dd>
                                </div>
                                <div className="flex flex-col">
                                    <dt className="mb-2 text-3xl font-extrabold">{formatNumber((((item.total_value) - (item.total_cost))) || 0)}%</dt>
                                    <dd className="text-gray-500 dark:text-gray-400">MC (%)</dd>
                                </div>
                              </dl>
                            </div>
                          )
                        }
                      }) : announcement.orders_detail.map((item, index) => {
                      
                        if (whatInfo === 'sales') {
                          return (
                            <div key={index} className="border-b border-gray-200">
                              <dl className="grid max-w-screen-xl grid-cols-2 gap-8  mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8" >
                              
                              <div className="flex flex-col">
                                  <dt className="mb-2 text-3xl font-extrabold">{item.order_id}</dt>
                                  <dd className="text-gray-500 dark:text-gray-400">id</dd>
                              </div>
                              
                            </dl>
                              <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8" >
                                <div className="flex flex-col">
                                    <dt className="mb-2 text-3xl font-extrabold">{item.quantity}</dt>
                                    <dd className="text-gray-500 dark:text-gray-400">Quantidade</dd>
                                </div>
                                <div className="flex flex-col">
                                    <dt className="mb-2 text-3xl font-extrabold">{formatNumber(item.value)}</dt>
                                    <dd className="text-gray-500 dark:text-gray-400">Valor (R$)</dd>
                                </div>
                                <div className="flex flex-col">
                                    <dt className="mb-2 text-3xl font-extrabold">{formatNumber(item.total_value)}</dt>
                                    <dd className="text-gray-500 dark:text-gray-400">Valor Total (R$)</dd>
                                </div>
                                
                              </dl>
                              <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8" >
                                
                                <div className="flex flex-col">
                                    <dt className="mb-2 text-3xl font-extrabold">{formatDate(item.date)}</dt>
                                    <dd className="text-gray-500 dark:text-gray-400">Data de envio</dd>
                                </div>
                                <div className="flex flex-col">
                                    <dt className="mb-2 text-3xl font-extrabold">{item.logistic_type}</dt>
                                    <dd className="text-gray-500 dark:text-gray-400">Tipo de envio</dd>
                                </div>
                                <div className="flex flex-col">
                                    <dt className="mb-2 text-3xl font-extrabold">{item.is_cancel ? 'Sim' : 'Não'}</dt>
                                    <dd className="text-gray-500 dark:text-gray-400">Foi cancelada ?</dd>
                                </div>
                              </dl>
                            </div>
                          )
                        }
                          else if (whatInfo === 'discount') {
                          return (
                            <div key={index} className="border-b border-gray-200">
                              <dl className="grid max-w-screen-xl grid-cols-2 gap-8  mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8" >
                              
                              <div className="flex flex-col">
                                  <dt className="mb-2 text-3xl font-extrabold">{item.order_id}</dt>
                                  <dd className="text-gray-500 dark:text-gray-400">id</dd>
                              </div>
                              
                            </dl>
                              <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8" >
                                <div className="flex flex-col">
                                    <dt className="mb-2 text-3xl font-extrabold">{item.tax}</dt>
                                    <dd className="text-gray-500 dark:text-gray-400">Tarifa</dd>
                                </div>
                                <div className="flex flex-col">
                                    <dt className="mb-2 text-3xl font-extrabold">{formatNumber(item.shipping_price)}</dt>
                                    <dd className="text-gray-500 dark:text-gray-400">Preço do frete(R$)</dd>
                                </div>
                                <div className="flex flex-col">
                                    <dt className="mb-2 text-3xl font-extrabold">{formatNumber(item.shipping_discount)}</dt>
                                    <dd className="text-gray-500 dark:text-gray-400">Desconto do frete (R$)</dd>
                                </div>
                                <div className="flex flex-col">
                                    <dt className="mb-2 text-3xl font-extrabold">{formatNumber(item.shipping_payed)}</dt>
                                    <dd className="text-gray-500 dark:text-gray-400">Frete pago (R$)</dd>
                                </div>
                              </dl>
                            </div>
                          )
                        } 
                        else if (whatInfo === 'cost') {
                          return (
                            <div key={index} className="border-b border-gray-200">
                              <dl className="grid max-w-screen-xl grid-cols-2 gap-8  mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8" >
                              
                              <div className="flex flex-col">
                                  <dt className="mb-2 text-3xl font-extrabold">{item.order_id}</dt>
                                  <dd className="text-gray-500 dark:text-gray-400">id</dd>
                              </div>
                              
                            </dl>
                              <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8" >
                                <div className="flex flex-col">
                                    <dt className="mb-2 text-3xl font-extrabold">{formatNumber(item.cost)}</dt>
                                    <dd className="text-gray-500 dark:text-gray-400">Unitario (R$)</dd>
                                </div>
                                <div className="flex flex-col">
                                    <dt className="mb-2 text-3xl font-extrabold">{formatNumber(item.total_cost)}</dt>
                                    <dd className="text-gray-500 dark:text-gray-400">Total (R$)</dd>
                                </div>
                                
                              </dl>
                            </div>
                          )
                        }
                        else if (whatInfo === 'impost') {
                          return (
                            <div key={index} className="border-b border-gray-200">
                              <dl className="grid max-w-screen-xl grid-cols-2 gap-8  mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8" >
                              
                              <div className="flex flex-col">
                                  <dt className="mb-2 text-3xl font-extrabold">{item.order_id}</dt>
                                  <dd className="text-gray-500 dark:text-gray-400">id</dd>
                              </div>
                              
                            </dl>
                              <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8" >
                                <div className="flex flex-col">
                                    <dt className="mb-2 text-3xl font-extrabold">{formatNumber(item.sale_fee)}</dt>
                                    <dd className="text-gray-500 dark:text-gray-400">Imposto (R$)</dd>
                                </div>
                              </dl>
                            </div>
                          )
                        }
                        else if (whatInfo === 'receipt') {
                          return (
                            <div key={index} className="border-b border-gray-200">
                              <dl className="grid max-w-screen-xl grid-cols-2 gap-8  mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8" >
                              
                              <div className="flex flex-col">
                                  <dt className="mb-2 text-3xl font-extrabold">{item.order_id}</dt>
                                  <dd className="text-gray-500 dark:text-gray-400">id</dd>
                              </div>
                              
                            </dl>
                              <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8" >
                                <div className="flex flex-col">
                                    <dt className="mb-2 text-3xl font-extrabold">{formatNumber(item.income)}</dt>
                                    <dd className="text-gray-500 dark:text-gray-400">Receita (R$)</dd>
                                </div>
                              </dl>
                            </div>
                          )
                        } 
                        else if (whatInfo === 'profit') {
                          return (
                            <div key={index} className="border-b border-gray-200">
                              <dl className="grid max-w-screen-xl grid-cols-2 gap-8  mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8" >
                              
                              <div className="flex flex-col">
                                  <dt className="mb-2 text-3xl font-extrabold">{item.order_id}</dt>
                                  <dd className="text-gray-500 dark:text-gray-400">id</dd>
                              </div>
                              
                            </dl>
                              <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8" >
                                <div className="flex flex-col">
                                    <dt className="mb-2 text-3xl font-extrabold">{formatNumber(item.profit_sale)}</dt>
                                    <dd className="text-gray-500 dark:text-gray-400">Venda (R$)</dd>
                                </div>
                                <div className="flex flex-col">
                                    <dt className="mb-2 text-3xl font-extrabold">{formatNumber(item.profit_item)}</dt>
                                    <dd className="text-gray-500 dark:text-gray-400">Item (R$)</dd>
                                </div>
                                <div className="flex flex-col">
                                    <dt className="mb-2 text-3xl font-extrabold">{formatNumber(item.profit_value)}</dt>
                                    <dd className="text-gray-500 dark:text-gray-400">Total (R$)</dd>
                                </div>
                                
                              </dl>
                            </div>
                          )
                        } 
                        else if (whatInfo === 'margin') {
                          return (
                            <div key={index} className="border-b border-gray-200">
                              <dl className="grid max-w-screen-xl grid-cols-2 gap-8  mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8" >
                              
                              <div className="flex flex-col">
                                  <dt className="mb-2 text-3xl font-extrabold">{item.order_id}</dt>
                                  <dd className="text-gray-500 dark:text-gray-400">id</dd>
                              </div>
                              
                            </dl>
                              <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8" >
                                <div className="flex flex-col">
                                <dt className="mb-2 text-3xl font-extrabold">{formatNumber((((item.income) / (item.total_cost)) * 100) || 0)}%</dt>

                                    <dd className="text-gray-500 dark:text-gray-400">ROI (%)</dd>
                                </div>
                                <div className="flex flex-col">
                                    <dt className="mb-2 text-3xl font-extrabold">{formatNumber((((item.total_value) - (item.total_cost))) || 0)}%</dt>
                                    <dd className="text-gray-500 dark:text-gray-400">MC (%)</dd>
                                </div>
                              </dl>
                            </div>
                          )
                        }
                      })
                    }
                  </div>
                </div>
              </div>
            </td>
          </tr>
          
        </>
      )}
    </>
  );
};

export default AnnouncementRow;

