// src/store/redux/hooks.js
import { useDispatch, useSelector } from 'react-redux';

// Export sebuah hook yang sudah dikonfigurasi untuk dispatch
export const useAppDispatch = () => useDispatch();

// Export sebuah hook yang sudah dikonfigurasi untuk selector
export const useAppSelector = useSelector;