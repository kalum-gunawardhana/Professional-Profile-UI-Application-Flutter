import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
} from 'react-native';
import { MapPin } from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function ProfileHeader() {
    return (
        <View style={styles.container}>
            {/* Background gradient effect */}
            <View style={styles.backgroundGradient} />

            <View style={styles.content}>
                {/* Profile Picture - CircleAvatar equivalent */}
                <View style={styles.avatarContainer}>
                    <Image
                        source={{ uri: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400' }}
                        style={styles.avatar}
                    />
                    <View style={styles.avatarBorder} />
                </View>

                {/* Name and Title */}
                <Text style={styles.name}>Sarah Johnson</Text>
                <Text style={styles.title}>Senior Software Engineer</Text>

                {/* Location */}
                <View style={styles.locationContainer}>
                    <MapPin size={16} color="#6B7280" />
                    <Text style={styles.location}>San Francisco, CA</Text>
                </View>

                {/* Professional Summary Badge */}
                <View style={styles.summaryBadge}>
                    <Text style={styles.summaryText}>5+ Years Experience</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        marginBottom: 16,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    backgroundGradient: {
        height: 120,
        backgroundColor: '#2563EB',
    },
    content: {
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingBottom: 24,
        marginTop: -60,
    },
    avatarContainer: {
        position: 'relative',
        marginBottom: 16,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#E5E7EB',
    },
    avatarBorder: {
        position: 'absolute',
        top: -4,
        left: -4,
        width: 128,
        height: 128,
        borderRadius: 64,
        borderWidth: 4,
        borderColor: '#FFFFFF',
    },
    name: {
        fontSize: 28,
        fontWeight: '700',
        color: '#111827',
        textAlign: 'center',
        marginBottom: 4,
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
        color: '#4F46E5',
        textAlign: 'center',
        marginBottom: 12,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    location: {
        fontSize: 16,
        color: '#6B7280',
        marginLeft: 4,
    },
    summaryBadge: {
        backgroundColor: '#EFF6FF',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#DBEAFE',
    },
    summaryText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#2563EB',
    },
});