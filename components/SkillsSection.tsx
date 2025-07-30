import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

interface Skill {
    name: string;
    proficiency: number; // 0-100
    category: string;
}

const skills: Skill[] = [
    { name: 'React / React Native', proficiency: 95, category: 'Frontend' },
    { name: 'TypeScript', proficiency: 90, category: 'Languages' },
    { name: 'Node.js', proficiency: 85, category: 'Backend' },
    { name: 'Python', proficiency: 80, category: 'Languages' },
    { name: 'GraphQL', proficiency: 75, category: 'APIs' },
    { name: 'AWS', proficiency: 70, category: 'Cloud' },
    { name: 'Docker', proficiency: 75, category: 'DevOps' },
    { name: 'PostgreSQL', proficiency: 80, category: 'Database' },
];

function SkillItem({ skill }: { skill: Skill }) {
    const getProgressColor = (proficiency: number) => {
        if (proficiency >= 90) return '#10B981'; // Green
        if (proficiency >= 80) return '#3B82F6'; // Blue
        if (proficiency >= 70) return '#F59E0B'; // Yellow
        return '#EF4444'; // Red
    };

    return (
        <View style={styles.skillItem}>
            <View style={styles.skillHeader}>
                <Text style={styles.skillName}>{skill.name}</Text>
                <Text style={styles.skillPercentage}>{skill.proficiency}%</Text>
            </View>

            <View style={styles.progressContainer}>
                <View style={styles.progressBackground}>
                    <View
                        style={[
                            styles.progressBar,
                            {
                                width: `${skill.proficiency}%`,
                                backgroundColor: getProgressColor(skill.proficiency)
                            }
                        ]}
                    />
                </View>
            </View>

            <Text style={styles.skillCategory}>{skill.category}</Text>
        </View>
    );
}

export default function SkillsSection() {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionTitle}>Technical Skills</Text>

            <View style={styles.skillsGrid}>
                {skills.map((skill, index) => (
                    <SkillItem key={index} skill={skill} />
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
    skillsGrid: {
        gap: 16,
    },
    skillItem: {
        backgroundColor: '#F8FAFC',
        padding: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E5E7EB',
    },
    skillHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    skillName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#111827',
        flex: 1,
    },
    skillPercentage: {
        fontSize: 14,
        fontWeight: '600',
        color: '#6B7280',
    },
    progressContainer: {
        marginBottom: 8,
    },
    progressBackground: {
        height: 8,
        backgroundColor: '#E5E7EB',
        borderRadius: 4,
        overflow: 'hidden',
    },
    progressBar: {
        height: '100%',
        borderRadius: 4,
    },
    skillCategory: {
        fontSize: 12,
        color: '#6B7280',
        fontWeight: '500',
    },
});