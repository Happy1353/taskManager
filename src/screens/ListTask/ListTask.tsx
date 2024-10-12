import React, { FC } from 'react';
import { Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTaskCompletion } from '../../redux/slices';
import { ListTaskProps } from './types';
import { styles, getTaskContainerStyle, getTaskTitleStyle } from './styles';
import { RootState } from '../../redux/store';
import { Task } from '../../types';

export const ListTask: FC<ListTaskProps> = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  const renderTask = ({ item }: { item: Task }) => (
    <TouchableOpacity
      onPress={() => dispatch(toggleTaskCompletion(item.id))}
      style={getTaskContainerStyle(item.completed, item.color)}
    >
      {item.imageUri && <Image source={{ uri: item.imageUri }} style={styles.taskImage} />}
      <Text style={getTaskTitleStyle(item.completed)}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return <FlatList data={tasks} renderItem={renderTask} keyExtractor={(item) => item.id} />;
};
