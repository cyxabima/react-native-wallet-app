import { useCallback, useState } from "react";
import { Alert } from 'react-native'
import { API_URL } from '../constants/api'

export const useTransactions = (userId) => {
    const [transaction, setTransaction] = useState([]);
    // const API_URL = "https://wallet-api-uk-f4db4181f046.herokuapp.com/api";

    const [summary, setSummary] = useState({
        balance: 0,
        income: 0,
        expenses: 0
    });

    const [isLoading, setIsLoading] = useState(true);

    const fetchTransactions = useCallback(async () => {
        try {
            const response = await fetch(`${API_URL}/transactions/${userId}`)
            const data = await response.json()
            setTransaction(data)
        } catch (error) {
            console.log("Error fetching Transactions :: ", error)
        }
    }, [userId])



    const fetchSummary = useCallback(async () => {
        try {

            const response = await fetch(`${API_URL}/transactions/summary/${userId}`)
            const data = await response.json()
            setSummary(data)
        } catch (error) {
            console.log("Error fetching Summary :: ", error)
        }
    }, [userId]);


    const loadData = useCallback(async () => {
        if (!userId) return;

        setIsLoading(true)
        try {
            await Promise.all([fetchTransactions(), fetchSummary()]);
        } catch (error) {
            console.log("error loading data :: error", error)
        } finally {
            setIsLoading(false)
        }
    }, [fetchTransactions, fetchSummary, userId]);


    const deleteTransaction = async (id) => {
        try {
            const response = await fetch(`${API_URL}/transactions/${id}`, {
                method: "DELETE",
            })

            if (!response.ok) throw new Error("Failed to Delete Transaction");


            loadData();
            Alert.alert("Success", "Transaction Deleted Successfully")

        } catch (error) {
            console.log("Error Deleting Transaction", error)
            ALert.alert("Error", error.message)
        }
    }

    return { transaction, summary, isLoading, loadData, deleteTransaction }
}