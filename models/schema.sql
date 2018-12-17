DROP DATABASE IF EXISTS 10000Hours_db;
CREATE DATABASE 10000Hours_db;

INSERT INTO Users (name, email, password, discipline1, subdiscipline1, subD1Hours, subdiscipline2, subD2Hours, subdiscipline3, subD3Hours, totalHours, longestSession, longestStreak, currentStreak, createdAt, updatedAt)
VALUES ("Alpha", "alphabeta@chi.com", "test123", "a1steaksauce", "kravmaga", "combos", 20, "inside defenses", 35, "self-defense", 15, 70, 3, 7, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

