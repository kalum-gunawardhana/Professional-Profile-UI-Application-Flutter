import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Briefcase, Calendar, MapPin } from 'lucide-react-native';

interface Experience {
    title: string;
    company: string;
    duration: string;
    location: string;
    description: string;
    achievements: string[];
}

const experiences: Experience[] = [
    {
        title: 'Senior Software Engineer',
        company: 'TechCorp Inc.',
        duration: '2022 - Present',
        location: 'San Francisco, CA',
        description: 'Leading frontend development for enterprise applications, mentoring junior developers, and driving technical architecture decisions.',
        achievements: [
            'Led development of React Native mobile app used by 100K+ users',
            'Improved application performance by 40% through optimization',
            'Mentored 5 junior developers and established code review processes',
            'Implemented CI/CD pipeline reducing deployment time by 60%'
        ]
    },
    {
        title: 'Software Engineer',
        company: 'StartupXYZ',
        duration: '2020 - 2022',
        location: 'San Francisco, CA',
        description: 'Full-stack development of web applications using React, Node.js, and PostgreSQL. Collaborated with design team to implement user-friendly interfaces.',
        achievements: [
            'Built and maintained 3 major product features from scratch',
            'Reduced bug reports by 50% through comprehensive testing',
            'Collaborated with design team to improve user experience',
            'Contributed to technical documentation and knowledge sharing'
        ]
    },
    {
        title: 'Junior Software Developer',
        company: 'WebSolutions Ltd.',
        duration: '2019 - 2020',
        location: 'San Jose, CA',
        description: 'Developed responsive web applications and maintained existing codebases. Gained experience in modern web technologies and agile development practices.',
        achievements: [
            'Developed 5+ responsive web applications',
            'Participated in agile development processes',
            'Learned modern web technologies and best practices',
            'Contributed to team knowledge sharing sessions'
        ]
    }
];

function ExperienceItem({ experience, isLast }: { experience: Experience; isLast: boolean }) {
    return (
        <View style={[styles.experienceItem, !isLast && styles.experienceItemBorder]}>
            <View style={styles.iconContainer}>
                <Briefcase size={24} color="#4F46E5" />
            </View>

            <View style={styles.experienceContent}>
                <Text style={styles.title}>{experience.title}</Text>
                <Text style={styles.company}>{experience.company}</Text>

                <View style={styles.metaContainer}>
                    <View style={styles.metaItem}>
                        <Calendar size={14} color="#6B7280" />
                        <Text style={styles.metaText}>{experience.duration}</Text>
                    </View>
                    <View style={styles.metaItem}>
                        <MapPin size={14} color="#6B7280" />
                        <Text style={styles.metaText}>{experience.location}</Text>
                    </View>
                </View>

                <Text style={styles.description}>{experience.description}</Text>

                <View style={styles.achievementsContainer}>
                    <Text style={styles.achievementsTitle}>Key Achievements:</Text>
                    {experience.achievements.map((achievement, index) => (
                        <View key={index} style={styles.achievementItem}>
                            <Text style={styles.bullet}>•</Text>
                            <Text style={styles.achievementText}>{achievement}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
}

export default function ExperienceScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <Text style={styles.screenTitle}>Professional Experience</Text>

                <View style={styles.experienceContainer}>
                    {experiences.map((experience, index) => (
                        <ExperienceItem
                            key={index}
                            experience={experience}
                            isLast={index === experiences.length - 1}
                        />
                    ))}
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
        marginBottom: 16,
        textAlign: 'center',
    },
    experienceContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    experienceItem: {
        flexDirection: 'row',
        paddingVertical: 16,
    },
    experienceItemBorder: {
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
    experienceContent: {
        flex: 1,
        gap: 4,
    },
    title: {
        fontSize: 18,
        fontWeight: '600',
        color: '#111827',
        lineHeight: 24,
    },
    company: {
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
        marginBottom: 12,
    },
    achievementsContainer: {
        backgroundColor: '#F8FAFC',
        padding: 12,
        borderRadius: 8,
        borderLeftWidth: 3,
        borderLeftColor: '#4F46E5',
    },
    achievementsTitle: {
        fontSize: 14,
        fontWeight: '600',
        color: '#111827',
        marginBottom: 8,
    },
    achievementItem: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 4,
    },
    bullet: {
        fontSize: 14,
        color: '#4F46E5',
        marginRight: 8,
        marginTop: 1,
    },
    achievementText: {
        fontSize: 14,
        lineHeight: 18,
        color: '#6B7280',
        flex: 1,
    },
    bottomSpacing: {
        height: 32,
    },
});