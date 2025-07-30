import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default function AboutSection() {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>About</Text>

            <View style={styles.content}>
                <Text style={styles.summary}>
                    Passionate software engineer with 5+ years of experience developing scalable web applications
                    and mobile solutions. Specialized in React, React Native, and Node.js with a strong focus on
                    user experience and performance optimization.
                </Text>

                <View style={styles.roleContainer}>
                    <Text style={styles.roleLabel}>Current Role</Text>
                    <Text style={styles.roleValue}>Senior Software Engineer at TechCorp</Text>
                    <Text style={styles.roleDescription}>
                        Leading frontend development for enterprise applications, mentoring junior developers,
                        and driving technical architecture decisions.
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#111827',
        marginBottom: 16,
    },
    content: {
        gap: 16,
    },
    summary: {
        fontSize: 16,
        lineHeight: 24,
        color: '#374151',
        textAlign: 'left',
    },
    roleContainer: {
        backgroundColor: '#F8FAFC',
        padding: 16,
        borderRadius: 12,
        borderLeftWidth: 4,
        borderLeftColor: '#4F46E5',
    },
    roleLabel: {
        fontSize: 14,
        fontWeight: '600',
        color: '#6B7280',
        marginBottom: 4,
    },
    roleValue: {
        fontSize: 18,
        fontWeight: '600',
        color: '#111827',
        marginBottom: 8,
    },
    roleDescription: {
        fontSize: 14,
        lineHeight: 20,
        color: '#6B7280',
    },
});