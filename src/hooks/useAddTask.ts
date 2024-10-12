import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { launchImageLibrary } from 'react-native-image-picker';

import { addTask } from '../redux/slices';
import { AddTaskProps } from '../screens/AddTask/types';
import { COLORS } from '../utils/Colors';

export const useAddTask = ({navigation}:AddTaskProps) => {
  const [title, setTitle] = useState<string>('');
  const [color, setColor] = useState<string>(COLORS[0]);
  const [imageUri, setImageUri] = useState<string | undefined>(undefined);
  const dispatch = useDispatch();

  const handleSaveTask = () => {
    if (title) {
      const newTask = {
        id: uuidv4(),
        title,
        color,
        imageUri,
        completed: false,
      };
      dispatch(addTask(newTask));
      setTitle('');
      setColor('');
      setImageUri(undefined);
      navigation.goBack();
    }
  };

  const pickImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.assets && response.assets[0].uri) {
        setImageUri(response.assets[0].uri);
      }
    });
  };
  return {
    title,
    setTitle,
    color,
    setColor,
    imageUri,
    setImageUri,
    handleSaveTask,
    pickImage,
  };
};
