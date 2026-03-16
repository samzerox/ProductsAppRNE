import { Product } from '@/core/products/interface/product.interface';
import { useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { ProductCard } from './ProductCard';

interface Props {
  products: Product[];
  loadNextPage: () => void;
}

const ProductList = ({products, loadNextPage}: Props) => {

  const [isRefreshing, setIsRefreshing] = useState(false);
  const QueryClient = useQueryClient();

  const onPullToRefresh = async() => {

    setIsRefreshing(true)
    
    await new Promise((resolve) => setTimeout(resolve, 200))
    
    QueryClient.invalidateQueries({
      queryKey: ['products', 'infinite']
    });
    
    setIsRefreshing(false);
  }

  return (
    <FlatList
      data={ products }
      numColumns={2}
      keyExtractor={ (item) => item.id}
      renderItem={({item}) => <ProductCard product={item} />}

      onEndReached={ loadNextPage }
      onEndReachedThreshold={ 0.8 }
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={isRefreshing} onRefresh={onPullToRefresh} />
      }
    />
  )
}

export default ProductList