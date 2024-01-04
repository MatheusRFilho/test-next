import AnnouncementRow from './AnnouncementRow';
import { Announcement } from '@/types/announcements';

interface AnnouncementsTableProps {
  announcements: Announcement[];
}

const AnnouncementsTable: React.FC<AnnouncementsTableProps> = ({ announcements }) => {
  
 return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-xl">
          <thead>
            <tr className="bg-blue-gray-100 text-gray-700">
              <th className="py-3 px-4 text-left">ID</th>
              <th className="py-3 px-4 text-left">Nome</th>
              <th className="py-3 px-4 text-left">SKU</th>
              <th className="py-3 px-4 text-left">Mais Detalhes</th>
            </tr>
          </thead>
          <tbody className='text-blue-gray-900'>
            {announcements.map((announcement) => (
              <AnnouncementRow key={announcement.ads_id} announcement={announcement} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AnnouncementsTable;


