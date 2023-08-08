import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  title: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iconRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center',
  },

  contentContainer: {
    flexGrow: 1,
    paddingVertical: 20,
  },
});

export default styles;
