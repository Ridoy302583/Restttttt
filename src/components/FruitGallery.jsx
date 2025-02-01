import React from 'react';

const fruits = [
  { name: 'Apple', image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80' },
  { name: 'Banana', image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80' },
  { name: 'Orange', image: 'https://images.unsplash.com/photo-1557800636-894a64c1696f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80' },
  { name: 'Strawberry', image: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80' },
  { name: 'Mango', image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80' },
  { name: 'Pineapple', image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80' },
];

const FruitGallery = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center">Fruit Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {fruits.map((fruit, index) => (
          <div key={index} className="bg-gray-700 rounded-lg overflow-hidden">
            <img
              src={fruit.image}
              alt={fruit.name}
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/300x200?text=${fruit.name}`;
              }}
            />
            <p className="p-2 text-center font-semibold">{fruit.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FruitGallery;
