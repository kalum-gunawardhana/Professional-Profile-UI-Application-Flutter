import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Pressable,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { User, Bell, Shield, Palette, Globe, CircleHelp as HelpCircle, Info, ChevronRight } from 'lucide-react-native';

interface SettingsItem {
    icon: any;
    title: string;
    description: string;
    action?: string;
}

const settingsGroups = [
    {
        title: 'Profile',
        items: [
            {
                icon: User,
                title: 'Edit Profile',
                description: 'Update your personal information and photo',
            },
            {
                icon: Bell,
                title: 'Notifications',
                description: 'Manage your notification preferences',
            },
        ]
    },
    {
        title: 'Preferences',
        items: [
            {
                icon: Palette,
                title: 'Appearance',
                description: 'Choose light or dark theme',
            },
            {
                icon: Globe,
                title: 'Language',
                description: 'Select your preferred language',
            },
            {
                icon: Shield,
                title: 'Privacy',
                description: 'Control your privacy settings',
            },
        ]
    },
    {
        title: 'Support',
        items: [
            {
                icon: HelpCircle,
                title: 'Help Center',
                description: 'Get help and support',
            },
            {
                icon: Info,
                title: 'About',
                description: 'App version and information',
            },
        ]
    }
];

function SettingsItem({ item }: { item: SettingsItem }) {
    const IconComponent = item.icon;

    return (
        <Pressable style={styles.settingsItem}>
            <View style={styles.iconContainer}>
                <IconComponent size={20} color="#4F46E5" />
            </View>

            <View style={styles.settingsContent}>
                <Text style={styles.settingsTitle}>{item.title}</Text>
                <Text style={styles.settingsDescription}>{item.description}</Text>
            </View>

            <ChevronRight size={20} color="#9CA3AF" />
        </Pressable>
    );
}

export default function SettingsScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <Text style={styles.screenTitle}>Settings</Text>

                {settingsGroups.map((group, groupIndex) => (
                    <View key={groupIndex} style={styles.settingsGroup}>
                        <Text style={styles.groupTitle}>{group.title}</Text>
                        <View style={styles.groupContainer}>
                            {group.items.map((item, itemIndex) => (
                                <View key={itemIndex}>
                                    <SettingsItem item={item} />
                                    {itemIndex < group.items.length - 1 && (
                                        <View style={styles.separator} />
                                    )}
                                </View>
                            ))}
                        </View>
                    </View>
                ))}

                {/* App Version */}
                <View style={styles.versionContainer}>
                    <Text style={styles.versionText}>Version 1.0.0</Text>
                    <Text style={styles.versionSubtext}>Professional Profile App</Text>
                </View>

                <View style={styles.bottomSpacing} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8FAFC',
    },
    scrollView: {
        flex: 1,
    },
    scrollContent: {
        paddingHorizontal: 16,
        paddingTop: 8,
    },
    screenTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#111827',
        marginBottom: 24,
        textAlign: 'center',
    },
    settingsGroup: {
        marginBottom: 24,
    },
    groupTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#6B7280',
        marginBottom: 8,
        paddingHorizontal: 4,
    },
    groupContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
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
    settingsItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'transparent',
    },
    iconContainer: {
        width: 40,
        height: 40,
        backgroundColor: '#EFF6FF',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    settingsContent: {
        flex: 1,
    },
    settingsTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#111827',
        marginBottom: 2,
    },
    settingsDescription: {
        fontSize: 14,
        color: '#6B7280',
        lineHeight: 18,
    },
    separator: {
        height: 1,
        backgroundColor: '#E5E7EB',
        marginLeft: 68,
    },
    versionContainer: {
        alignItems: 'center',
        padding: 16,
        marginTop: 16,
    },
    versionText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#6B7280',
    },
    versionSubtext: {
        fontSize: 12,
        color: '#9CA3AF',
        marginTop: 2,
    },
    bottomSpacing: {
        height: 32,
    },
});