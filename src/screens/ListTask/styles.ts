import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  taskContainer: {
    padding: 20,
    marginBottom: 10,
    borderLeftWidth: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  taskTitle: {
    flex: 1,
  },
});

export const getTaskContainerStyle = (completed: boolean, color: string) => ({
  ...styles.taskContainer,
  backgroundColor: completed ? '#d3d3d3' : '#fff',
  borderLeftColor: color,
});

export const getTaskTitleStyle = (completed: boolean) => ({
  ...styles.taskTitle,
  textDecorationLine: completed ? 'line-through' : 'none' as 'line-through' | 'none',
});
