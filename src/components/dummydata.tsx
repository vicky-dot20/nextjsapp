import React from 'react';
import Image from 'next/image';
type DataItem = {
  img: string;
  title: string;
  subtitle: string;
};

const dummyData: DataItem[] = [
  // (the data goes here as defined above)


  {
    img: 'https://via.placeholder.com/150',
    title: 'Title 1',
    subtitle: 'Subtitle 1',
  },
  {
    img: 'https://via.placeholder.com/150',
    title: 'Title 2',
    subtitle: 'Subtitle 2',
  },
  {
    img: 'https://via.placeholder.com/150',
    title: 'Title 3',
    subtitle: 'Subtitle 3',
  },
  {
    img: 'https://via.placeholder.com/150',
    title: 'Title 4',
    subtitle: 'Subtitle 4',
  },
  {
    img: 'https://via.placeholder.com/150',
    title: 'Title 5',
    subtitle: 'Subtitle 5',
  },
  {
    img: 'https://via.placeholder.com/150',
    title: 'Title 6',
    subtitle: 'Subtitle 6',
  },
  {
    img: 'https://via.placeholder.com/150',
    title: 'Title 7',
    subtitle: 'Subtitle 7',
  },
  {
    img: 'https://via.placeholder.com/150',
    title: 'Title 8',
    subtitle: 'Subtitle 8',
  },
  {
    img: 'https://via.placeholder.com/150',
    title: 'Title 9',
    subtitle: 'Subtitle 9',
  },
  {
    img: 'https://via.placeholder.com/150',
    title: 'Title 10',
    subtitle: 'Subtitle 10',
  },
];

const DataComponent: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {dummyData.map((item, index) => (
        <div key={index} className="p-4 border rounded shadow">
          <Image width={500} height={500}  src={item.img} alt={item.title} className="w-full h-32 object-cover mb-2" />
          <h2 className="text-xl font-bold">{item.title}</h2>
          <p className="text-gray-600">{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default DataComponent;
