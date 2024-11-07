import React from 'react';

type CategoriesProps = {
  value: number;
  onChangeCategory: (idx: number) => void;
};

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

export const Categories: React.FC<CategoriesProps> = () => {
  return (
    <div className='categories'>
      <ul>
        {categories.map((categoryName, i) => (
          <li key={i}>{categoryName}</li>
        ))}
      </ul>
    </div>
  );
};
