import React from 'react';
import Input from '../UI/Input/Input';
import Select from '../UI/Select/Select';
import classes from './PostFilter.module.css'

const PostFilter = ({filter, setFilter}) => {
    return (
      <div className={classes.filter}>
          <Input value={filter.query} onChange={e => setFilter({...filter, query: e.target.value})} type={'text'} ph={'Search'}/>
          <Select
            defoultValue="Сортировка"
            options={[
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По описанию'}
            ]}
            value={filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          />
      </div>
    );
};

export default PostFilter;