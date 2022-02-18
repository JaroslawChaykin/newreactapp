import React from 'react';
import Input from '../UI/Input/Input';
import Select from '../Select/Select';

const PostFilter = ({filter, setFilter}) => {
    return (
      <div>
          <Input value={filter.query} onChange={e => setFilter({...filter, query: e.target.value})} type={'text'} ph={'Search'}/>
          <Select
            defoultValue="Сортировка"
            options={[
                {value: 'title', name: 'По названию'},
                {value: 'description', name: 'По описанию'}
            ]}
            value={filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          />
      </div>
    );
};

export default PostFilter;