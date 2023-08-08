import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  logo: {
    width: '100%',
    height: 450,
    top: -190,
  },

  account: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    height: 500,
    top: 115,
    borderTopLeftRadius: 100,
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
  },

  inputContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  input: {
    height: 50,
    margin: 10,
    backgroundColor: '#D9DDDC',
    width: '80%',
    padding: 10,
    borderRadius: 10,
    borderBottomWidth: 3,
    borderBottomColor: '#FFC300',
  },

  title: {
    color: 'black',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
  },

  customBotton: {
    backgroundColor: '#FFC300',
    borderRadius: 10,
    padding: 5,
    width: '80%',
    marginTop: 50,
    height: 50,
    justifyContent: 'center',
  },

  textt: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'normal',
    textAlign: 'center',
  },

  signupContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'center',
  },

  signText: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'normal',
  },

  signupLink: {
    fontWeight: 'bold',
    color: '#FFC300',
    marginLeft: 5,
  },
});

export default styles;
