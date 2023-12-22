import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const OrderSummaryScreen = ({ route }) => {
  const { cartItems } = route.params;

  // Calculate total amount
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Summary</Text>

      <ScrollView style={styles.cartItemsContainer}>
        {cartItems.map(item => (
          <View key={item.id} style={styles.cartItem}>
            <Text style={styles.itemText}>{item.design}</Text>
            <Text style={styles.itemPrice}>₱{item.price.toFixed(2)}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total:</Text>
        <Text style={styles.totalAmount}>₱{totalAmount.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F5F5F5', // Light gray background color
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#5C2783', // Updated to match your color scheme
  },
  cartItemsContainer: {
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D9', // Updated to match your color scheme
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  itemPrice: {
    fontSize: 16,
    color: '#27ae60',
    fontWeight: 'bold',
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#27ae60',
  },
});

export default OrderSummaryScreen;
