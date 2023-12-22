// BuyShirtScreen.js

import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BuyShirtScreen = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showDesignSet1, setShowDesignSet1] = useState(true);
  const navigation = useNavigation();

  const handleAddToCart = () => {
    const newItem = {
      id: cartItems.length + 1,
      design: showDesignSet1 ? 'Design Set A' : 'Design Set B',
      price: showDesignSet1 ? 299.99 : 349.99,
    };

    setCartItems([...cartItems, newItem]);
  };

  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const handleViewMoreDesigns = () => {
    setShowDesignSet1(!showDesignSet1);
  };

  const designSet1 = {
    images: [
      require('../assets/tshirtA.jpg'),
      require('../assets/lanyardA.jpg'),
    ],
    price: 299.99,
  };

  const designSet2 = {
    images: [
      require('../assets/tshirtB.jpg'),
      require('../assets/lanyardB.jpg'),
    ],
    price: 349.99,
  };

  const currentDesignSet = showDesignSet1 ? designSet1 : designSet2;

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  const handlePlaceOrder = () => {
    navigation.navigate('OrderSummary', { cartItems });
  };

  return (
    <View style={styles.container}>


      <View style={styles.content}>
      <View style={styles.cartContainer}>
        <Image source={require('../assets/addcart.png')} style={styles.cartIcon} />
        {cartItems.length > 0 && (
          <View style={styles.cartCounter}>
            <Text style={styles.cartCount}>{cartItems.length}</Text>
          </View>
        )}
      </View>
        <Text style={styles.title}>CCS Intramurals T-Shirt 2023</Text>
        <Text style={styles.description}>
          Explore our exclusive collection of T-shirts designed for CCS Intramurals 2023. High-quality materials and stylish designs to make your event memorable!
        </Text>
        <View style={styles.imageRow}>
          <Image source={currentDesignSet.images[0]} style={styles.shirtImage} />
          <View style={styles.imageGap} />
          <Image source={currentDesignSet.images[1]} style={styles.shirtImage} />
        </View>
        <Text style={styles.price}>₱{currentDesignSet.price.toFixed(2)}</Text>
        <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.viewMoreButton} onPress={handleViewMoreDesigns}>
          <Text style={styles.viewMoreButtonText}>View More Designs</Text>
        </TouchableOpacity>

        <ScrollView style={styles.cartItemsContainer} contentContainerStyle={styles.cartItemsContent}>
          {cartItems.map(item => (
            <View key={item.id} style={styles.cartItem}>
              <Text>{item.design}</Text>
              <Text>   ₱{item.price.toFixed(2)}</Text>
              <TouchableOpacity onPress={() => handleRemoveItem(item.id)}>
                <Text style={styles.removeItemText}>   Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalAmount}>₱{totalAmount.toFixed(2)}</Text>
        </View>

        <TouchableOpacity style={styles.placeOrderButton} onPress={handlePlaceOrder}>
          <Text style={styles.buttonText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5', // Light gray background color
  },
  content: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    marginTop: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333', // Dark gray text color
  },
  description: {
    fontSize: 14,
    color: '#666', // Gray text color
    marginBottom: 20,
  },
  shirtImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 20,
  },
  imageGap: {
    width: 20,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333', // Dark gray text color
  },
  addToCartButton: {
    backgroundColor: '#5C2783',
    padding: 16,
    borderRadius: 8,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  viewMoreButton: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 8,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewMoreButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  cartIcon: {
    width: 30,
    height: 30,
    tintColor: '#5C2783', // Adjust icon color
  },
  cartCounter: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#FF4500',
    borderRadius: 15,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartCount: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'space-around', // Adjusted to make it more balanced
    marginBottom: 20,
  },
  viewMoreButton: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 8,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  viewMoreButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  totalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20, // Adjusted for better balance
    marginBottom: 0, // Adjusted for better balance
    justifyContent: 'space-between', // Adjusted for better balance
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#27ae60', // Green color for total amount
  },
  cartItemsContainer: {
    marginTop: 0,
    maxHeight: 50, // Adjusted for better balance
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  removeItemText: {
    color: 'red',
  },
  placeOrderButton: {
    backgroundColor: '#27ae60',
    padding: 16,
    borderRadius: 8,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  addToCartButton: {
    backgroundColor: '#5C2783',
    padding: 16,
    borderRadius: 15,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewMoreButton: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 15,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  viewMoreButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cartItemsContainer: {
    marginTop: 0,
    maxHeight: 50,
  },
  placeOrderButton: {
    backgroundColor: '#27ae60',
    padding: 16,
    borderRadius: 15,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
export default BuyShirtScreen;
