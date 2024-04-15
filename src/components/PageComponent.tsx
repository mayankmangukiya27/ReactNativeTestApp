import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {memo, useCallback, useEffect, useState} from 'react';
import PageItem from './PageItem';
import {DEVICE_WIDTH} from '../utils/theme';
import {fetchNextPageData} from '../utils/functions';
import useDebounce from '../hooks/useDebounce';

export interface PageItemProps {
  name: string;
  'poster-image': string;
}

export interface PageComponentProps {
  searchText: string;
}

const PageComponent: React.FC<PageComponentProps> = ({searchText}) => {
  const [details, setDetails] = useState<PageItemProps[]>([]);
  const [page, setPage] = useState(0);

  const debounceSearch = useDebounce(searchText);

  useEffect(() => {
    (() => {
      const data = fetchNextPageData(0, debounceSearch);
      setPage(0);
      setDetails(data);
    })();
  }, [debounceSearch]);

  const handleOnEndReached = useCallback(async () => {
    const data = fetchNextPageData(page + 1, debounceSearch);
    setPage(page + 1);
    setDetails([...details, ...data]);
  }, [details, page, debounceSearch]);

  return (
    <View style={{width: DEVICE_WIDTH / 3, height: '100%'}}>
      <FlatList
        data={details}
        keyExtractor={(_, index) => index.toString()}
        overScrollMode={'never'}
        showsVerticalScrollIndicator={false}
        onEndReached={handleOnEndReached}
        onEndReachedThreshold={0.8}
        renderItem={({item, index}) => (
          <PageItem key={index.toString()} item={item} />
        )}
      />
    </View>
  );
};

export default memo(PageComponent);
