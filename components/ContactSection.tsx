import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Pressable,
} from 'react-native';
import { Mail, Phone, Globe, Linkedin } from 'lucide-react-native';

interface ContactItem {
    icon: any;
    label: string;
    value: string;
    type: 'email' | 'phone' | 'website' | 'social';
}

const contactInfo: ContactItem[] = [
    {
        icon: Mail,
        label: 'Email',
        value: 'sarah.johnson@email.com',
        type: 'email'
    },
    {
        icon: Phone,
        label: 'Phone',
        value: '+1 (555) 123-4567',
        type: 'phone'
    },
    {
        icon: Globe,
        label: 'Website',
        value: 'www.sarahjohnson.dev',
        type: 'website'
    },
    {
        icon: Linkedin,
        label: 'LinkedIn',
        value: 'linkedin.com/in/sarahjohnson',
        type: 'social'
    }
];

function ContactItem({ item }: { item: ContactItem }) {
    const IconComponent = item.icon;

    return (
        <Pressable style={styles.contactItem}>
            <View style={styles.iconContainer}>
                <IconComponent size={20} color="#4F46E5" />
            </View>

            <View style={styles.contactContent}>
                <Text style={styles.contactLabel}>{item.label}</Text>
                <Text style={styles.contactValue}>{item.value}</Text>
            </View>
        </Pressable>
    );
}

export default function ContactSection() {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Contact Information</Text>

            <View style={styles.contactList}>
                {contactInfo.map((item, index) => (
                    <ContactItem key={index} item={item} />
                ))}
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
    contactList: {
        gap: 2,
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#F8FAFC',
        marginBottom: 8,
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
    contactContent: {
        flex: 1,
    },
    contactLabel: {
        fontSize: 12,
        fontWeight: '500',
        color: '#6B7280',
        marginBottom: 2,
    },
    contactValue: {
        fontSize: 16,
        fontWeight: '500',
        color: '#111827',
    },
});