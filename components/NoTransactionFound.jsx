import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../assets/styles/home.styles'
import { COLORS } from '../constants/colors'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const NoTransactionFound = () => {
    const router = useRouter();

    return (
        <View style={styles.emptyState}>
            <Ionicons
                name='receipt-outline'
                size={60}
                color={COLORS.textLight}
                style={styles.emptyStateIcon} />

            <Text style={styles.emptyStateTitle}>No transaction yet</Text>
            <Text style={styles.emptyStateText}>
                Start tracking your finances by adding your transaction
            </Text>

            <TouchableOpacity style={styles.emptyStateButton} onPress={() => router.push('/create')}>
                <Ionicons name='add-circle' size={18} color={COLORS.white} />
                <Text style={styles.emptyStateButtonText}>Add Transaction</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NoTransactionFound