import React, { FC } from 'react';
import { View, TextInput, Button, TouchableOpacity, Image } from 'react-native';

import { useAddTask } from '../../hooks/useAddTask';
import { AddTaskProps } from './types';
import { COLORS } from '../../utils/Colors';
import { styles } from './styles';

export const AddTask: FC<AddTaskProps> = ({navigation}) => {
  const {
    title,
    setTitle,
    setColor,
    imageUri,
    handleSaveTask,
    pickImage,
  } = useAddTask({navigation});

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Task Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <View style={styles.colorsContainer}>
        {COLORS.map((colorOption) => (
          <TouchableOpacity
            key={colorOption}
            style={[
              styles.colorOption,
              {
                backgroundColor: colorOption,
              },
            ]}
            onPress={() => setColor(colorOption)}
          />
        ))}
      </View>
      <Button title="Pick Image" onPress={pickImage} />
      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      <Button title="Save Task" onPress={handleSaveTask} />
    </View>
  );
};

