"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("../config/database");
const models_1 = require("../models");
const users = [
    {
        username: 'maya_runner',
        email: 'maya.runner@example.com',
        displayName: 'Maya Chen',
        teamName: 'Circuit Breakers',
        fitnessGoal: 'Run a 10K under 55 minutes',
        joinedAt: new Date('2026-05-01'),
    },
    {
        username: 'leo_lifts',
        email: 'leo.lifts@example.com',
        displayName: 'Leo Martin',
        teamName: 'Rep Rangers',
        fitnessGoal: 'Increase strength and mobility',
        joinedAt: new Date('2026-05-05'),
    },
    {
        username: 'nina_cycle',
        email: 'nina.cycle@example.com',
        displayName: 'Nina Patel',
        teamName: 'Circuit Breakers',
        fitnessGoal: 'Complete a 60-mile charity ride',
        joinedAt: new Date('2026-05-10'),
    },
];
const teams = [
    {
        name: 'Circuit Breakers',
        captain: 'Maya Chen',
        memberCount: 8,
        weeklyGoalMinutes: 1800,
        motto: 'Consistency compounds.',
    },
    {
        name: 'Rep Rangers',
        captain: 'Leo Martin',
        memberCount: 6,
        weeklyGoalMinutes: 1500,
        motto: 'Strong reps, stronger team.',
    },
];
const activities = [
    {
        username: 'maya_runner',
        activityType: 'Outdoor Run',
        durationMinutes: 48,
        caloriesBurned: 430,
        activityDate: new Date('2026-06-01T07:30:00Z'),
        notes: 'Tempo run with steady negative splits.',
    },
    {
        username: 'leo_lifts',
        activityType: 'Strength Training',
        durationMinutes: 55,
        caloriesBurned: 360,
        activityDate: new Date('2026-06-01T18:15:00Z'),
        notes: 'Lower body session focused on squats and hip stability.',
    },
    {
        username: 'nina_cycle',
        activityType: 'Cycling',
        durationMinutes: 75,
        caloriesBurned: 620,
        activityDate: new Date('2026-06-02T06:45:00Z'),
        notes: 'Hill repeats with cadence work.',
    },
];
const leaderboard = [
    {
        username: 'nina_cycle',
        teamName: 'Circuit Breakers',
        rank: 1,
        totalPoints: 1840,
        weeklyMinutes: 235,
    },
    {
        username: 'maya_runner',
        teamName: 'Circuit Breakers',
        rank: 2,
        totalPoints: 1715,
        weeklyMinutes: 210,
    },
    {
        username: 'leo_lifts',
        teamName: 'Rep Rangers',
        rank: 3,
        totalPoints: 1490,
        weeklyMinutes: 185,
    },
];
const workouts = [
    {
        title: '10K Pace Builder',
        focusArea: 'Endurance',
        difficulty: 'Intermediate',
        durationMinutes: 45,
        suggestedForGoal: 'Run a 10K under 55 minutes',
        exercises: ['Dynamic warmup', '4x8 minute tempo blocks', 'Easy cooldown'],
    },
    {
        title: 'Foundational Strength Circuit',
        focusArea: 'Strength',
        difficulty: 'Beginner',
        durationMinutes: 35,
        suggestedForGoal: 'Increase strength and mobility',
        exercises: ['Goblet squats', 'Incline pushups', 'Romanian deadlifts', 'Side planks'],
    },
    {
        title: 'Climbing Cadence Ride',
        focusArea: 'Cycling',
        difficulty: 'Advanced',
        durationMinutes: 60,
        suggestedForGoal: 'Complete a 60-mile charity ride',
        exercises: ['Progressive warmup', '6 hill repeats', 'High-cadence recovery spin'],
    },
];
async function seed() {
    console.log('Seed the octofit_db database with test data');
    console.log(`Connecting to ${database_1.mongoUri}`);
    await (0, database_1.connectToDatabase)();
    await Promise.all([
        models_1.User.deleteMany({}),
        models_1.Team.deleteMany({}),
        models_1.Activity.deleteMany({}),
        models_1.LeaderboardEntry.deleteMany({}),
        models_1.Workout.deleteMany({}),
    ]);
    await models_1.User.insertMany(users);
    await models_1.Team.insertMany(teams);
    await models_1.Activity.insertMany(activities);
    await models_1.LeaderboardEntry.insertMany(leaderboard);
    await models_1.Workout.insertMany(workouts);
    console.log(`Seeded ${users.length} users`);
    console.log(`Seeded ${teams.length} teams`);
    console.log(`Seeded ${activities.length} activities`);
    console.log(`Seeded ${leaderboard.length} leaderboard entries`);
    console.log(`Seeded ${workouts.length} workouts`);
}
seed()
    .catch((error) => {
    console.error('Failed to seed octofit_db database.', error);
    process.exitCode = 1;
})
    .finally(async () => {
    await (0, database_1.disconnectFromDatabase)();
});
