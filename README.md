# Smart Shopping Application

## Overview

Welcome to the Smart Shopping Application! This project leverages IoT, computer vision, and machine learning to enhance the shopping experience. By integrating a Raspberry Pi with a PiCamera, a QR scanner, Firebase for data storage, and an Android app, this system provides a seamless and smart shopping experience.

## Features

- **QR Code Scanning**: Utilize a Raspberry Pi with PiCamera and OpenCV to scan QR codes of products.
- **Data Storage**: Store item details and user information securely in Firebase.
- **Mobile App**: Android application built with React Native for users to scan products and manage their shopping list.
- **Sales Prediction**: Machine learning model to predict sales based on historical purchase data, available to the admin.

## Components

### Raspberry Pi with PiCamera

- **Hardware**: Raspberry Pi, PiCamera
- **Software**: OpenCV for building the QR scanner

### Firebase

- **Databases**: Firebase Realtime Database for storing item and user details

### Android App

- **Framework**: React Native for building the mobile application
- **Features**: Scanning products, viewing item details, managing shopping lists

### Machine Learning Model

- **Purpose**: Predict sales based on historical purchases (ARIMA)
- **Access**: Available to the admin for inventory management and sales forecasting

# Instructions to start the app
```git clone https://github.com/tanvi217/Smart-trolley-app.git
cd Smart-trolley-app
npm install
react-native run-android
react-native start
```
