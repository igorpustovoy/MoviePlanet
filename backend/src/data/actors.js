const actors = [
  {
    id: 1,
    movie_id: 3,
    person_id: 2,
  },
  {
    id: 2,
    movie_id: 3,
    person_id: 1,
  },
  {
    id: 3,
    movie_id: 2,
    person_id: 2,
  },
  {
    id: 6,
    movie_id: 2,
    person_id: 1,
  },
  {
    id: 22,
    movie_id: 1,
    person_id: 2,
  },
  {
    id: 23,
    movie_id: 1,
    person_id: 5,
  },
  {
    id: 24,
    movie_id: 1,
    person_id: 10,
  },
  {
    id: 25,
    movie_id: 1,
    person_id: 11,
  },
  {
    id: 26,
    movie_id: 1,
    person_id: 13,
  },
  {
    id: 27,
    movie_id: 1,
    person_id: 8,
  },
  {
    id: 28,
    movie_id: 1,
    person_id: 7,
  },
  {
    id: 29,
    movie_id: 1,
    person_id: 6,
  },
  {
    id: 30,
    movie_id: 2,
    person_id: 7,
  },
  {
    id: 31,
    movie_id: 2,
    person_id: 12,
  },
  {
    id: 32,
    movie_id: 2,
    person_id: 11,
  },
  {
    id: 33,
    movie_id: 2,
    person_id: 13,
  },
  {
    id: 34,
    movie_id: 2,
    person_id: 10,
  },
  {
    id: 35,
    movie_id: 2,
    person_id: 9,
  },
  {
    id: 36,
    movie_id: 2,
    person_id: 8,
  },
  {
    id: 37,
    movie_id: 3,
    person_id: 13,
  },
  {
    id: 38,
    movie_id: 3,
    person_id: 8,
  },
  {
    id: 39,
    movie_id: 3,
    person_id: 7,
  },
  {
    id: 40,
    movie_id: 3,
    person_id: 9,
  },
  {
    id: 41,
    movie_id: 3,
    person_id: 10,
  },
  {
    id: 42,
    movie_id: 3,
    person_id: 6,
  },
  {
    id: 43,
    movie_id: 3,
    person_id: 5,
  },
  {
    id: 44,
    movie_id: 3,
    person_id: 12,
  },
  {
    id: 45,
    movie_id: 7,
    person_id: 5,
  },
  {
    id: 46,
    movie_id: 7,
    person_id: 11,
  },
  {
    id: 47,
    movie_id: 7,
    person_id: 10,
  },
  {
    id: 48,
    movie_id: 7,
    person_id: 12,
  },
  {
    id: 49,
    movie_id: 7,
    person_id: 13,
  },
  {
    id: 50,
    movie_id: 7,
    person_id: 8,
  },
  {
    id: 51,
    movie_id: 7,
    person_id: 2,
  },
  {
    id: 52,
    movie_id: 7,
    person_id: 1,
  },
  {
    id: 53,
    movie_id: 7,
    person_id: 6,
  },
  {
    id: 54,
    movie_id: 8,
    person_id: 9,
  },
  {
    id: 55,
    movie_id: 8,
    person_id: 13,
  },
  {
    id: 56,
    movie_id: 8,
    person_id: 10,
  },
  {
    id: 57,
    movie_id: 8,
    person_id: 12,
  },
  {
    id: 58,
    movie_id: 8,
    person_id: 11,
  },
  {
    id: 59,
    movie_id: 11,
    person_id: 6,
  },
  {
    id: 60,
    movie_id: 11,
    person_id: 9,
  },
  {
    id: 61,
    movie_id: 11,
    person_id: 11,
  },
  {
    id: 62,
    movie_id: 11,
    person_id: 8,
  },
  {
    id: 63,
    movie_id: 11,
    person_id: 5,
  },
  {
    id: 64,
    movie_id: 11,
    person_id: 13,
  },
  {
    id: 65,
    movie_id: 11,
    person_id: 2,
  },
  {
    id: 66,
    movie_id: 13,
    person_id: 1,
  },
  {
    id: 67,
    movie_id: 13,
    person_id: 8,
  },
  {
    id: 68,
    movie_id: 13,
    person_id: 10,
  },
  {
    id: 69,
    movie_id: 13,
    person_id: 2,
  },
  {
    id: 70,
    movie_id: 13,
    person_id: 12,
  },
  {
    id: 71,
    movie_id: 13,
    person_id: 9,
  },
  {
    id: 72,
    movie_id: 13,
    person_id: 5,
  },
  {
    id: 73,
    movie_id: 14,
    person_id: 2,
  },
  {
    id: 74,
    movie_id: 14,
    person_id: 5,
  },
  {
    id: 75,
    movie_id: 14,
    person_id: 7,
  },
  {
    id: 76,
    movie_id: 14,
    person_id: 6,
  },
  {
    id: 77,
    movie_id: 14,
    person_id: 8,
  },
  {
    id: 78,
    movie_id: 14,
    person_id: 9,
  },
  {
    id: 79,
    movie_id: 14,
    person_id: 10,
  },
  {
    id: 80,
    movie_id: 14,
    person_id: 11,
  },
  {
    id: 81,
    movie_id: 14,
    person_id: 12,
  },
  {
    id: 82,
    movie_id: 14,
    person_id: 13,
  },
  {
    id: 83,
    movie_id: 14,
    person_id: 1,
  },
  {
    id: 84,
    movie_id: 10,
    person_id: 2,
  },
  {
    id: 85,
    movie_id: 10,
    person_id: 8,
  },
  {
    id: 86,
    movie_id: 10,
    person_id: 9,
  },
  {
    id: 87,
    movie_id: 10,
    person_id: 10,
  },
  {
    id: 88,
    movie_id: 10,
    person_id: 11,
  },
  {
    id: 89,
    movie_id: 10,
    person_id: 12,
  },
  {
    id: 90,
    movie_id: 10,
    person_id: 13,
  },
  {
    id: 91,
    movie_id: 10,
    person_id: 1,
  },
  {
    id: 92,
    movie_id: 10,
    person_id: 5,
  },
  {
    id: 93,
    movie_id: 10,
    person_id: 6,
  },
  {
    id: 94,
    movie_id: 10,
    person_id: 7,
  },
];

module.exports = actors;
