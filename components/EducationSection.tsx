import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';
import { GraduationCap, Calendar, MapPin } from 'lucide-react-native';

interface Education {
    degree: string;
    institution: string;
    year: string;
    location: string;
    description?: string;
}

const education: Education[] = [
    {
        degree: 'Master of Science in Computer Science',
        institution: 'Stanford University',
        year: '2019',
        location: 'Stanford, CA',
        description: 'Specialized in Human-Computer Interaction and Software Engineering. Thesis on "Improving Mobile App Performance through Advanced Optimization Techniques".'
    },
    {
        degree: 'Bachelor of Science in Software Engineering',
        institution: 'UC Berkeley',
        year: '2017',
        location: 'Berkeley, CA',
        description: 'Graduated Summa Cum Laude. Focus on full-stack development and data structures.'
    }
];

function EducationItem({ education: edu, isLast }: { education: Education; isLast: boolean }) {
    return (
        <View style={[styles.educationItem, !isLast && styles.educationItemBorder]}>
            <View style={styles.iconContainer}>
                <GraduationCap size={24} color="#4F46E5" />
            </View>

            <View style={styles.educationContent}>
                <Text style={styles.degree}>{edu.degree}</Text>
                <Text style={styles.institution}>{edu.institution}</Text>

                <View style={styles.metaContainer}>
                    <View style={styles.metaItem}>
                        <Calendar size={14} color="#6B7280" />
                        <Text style={styles.metaText}>{edu.year}</Text>
                    </View>
                    <View style={styles.metaItem}>
                        <MapPin size={14} color="#6B7280" />
                        <Text style={styles.metaText}>{edu.location}</Text>
                    </View>
                </View>

                {edu.description && (
                    <Text style={styles.description}>{edu.description}</Text>
                )}
            </View>
        </View>
    );
}

export default function EducationSection() {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Education</Text>

            <View style={styles.educationList}>
                {education.map((edu, index) => (
                    <EducationItem
                        key={index}
                        education={edu}
                        isLast={index === education.length - 1}
                    />
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
    educationList: {
        gap: 0,
    },
    educationItem: {
        flexDirection: 'row',
        paddingVertical: 16,
    },
    educationItemBorder: {
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB',
    },
    iconContainer: {
        width: 48,
        height: 48,
        backgroundColor: '#EFF6FF',
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    educationContent: {
        flex: 1,
        gap: 4,
    },
    degree: {
        fontSize: 18,
        fontWeight: '600',
        color: '#111827',
        lineHeight: 24,
    },
    institution: {
        fontSize: 16,
        fontWeight: '500',
        color: '#4F46E5',
        marginBottom: 8,
    },
    metaContainer: {
        flexDirection: 'row',
        gap: 16,
        marginBottom: 8,
    },
    metaItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    metaText: {
        fontSize: 14,
        color: '#6B7280',
    },
    description: {
        fontSize: 14,
        lineHeight: 20,
        color: '#6B7280',
    },
});