
CREATE TABLE tracks (
  id INT NOT NULL AUTO_INCREMENT,
  track_name VARCHAR(250) NULL,
  track_description VARCHAR(250) NULL,
  stretch_vid VARCHAR(250) NULL,
  cardio_vid VARCHAR(250) NULL,
  workout_vid VARCHAR(250) NULL,
  nutrition_vid VARCHAR(250) NULL,
  PRIMARY KEY (id)
);

INSERT INTO tracks (track_name, track_description, stretch_vid, cardio_vid, workout_vid, nutrition_vid)
VALUES ("Assasin", "You're versatile, cunning, and willing to take calculated risks. This track is perfect for the casual character who understands the link between mind and body.", "https://www.youtube.com/watch?v=VxBAlya7npk", "https://www.youtube.com/watch?v=86QRDjbrbdk", "https://www.youtube.com/watch?v=J4LJxvjq3BY", "https://www.youtube.com/watch?v=rO0Q9f4aYms");

INSERT INTO tracks (track_name, track_description, stretch_vid, cardio_vid, workout_vid, nutrition_vid)
VALUES ("Hunter", "Nimbleness, with a lean physique. You love the rush of the chase, and you understand the importance of instinct and calcution.", "https://www.youtube.com/watch?v=kKeBjBBUQyY", "https://www.youtube.com/watch?v=6wTylMnX7_k", "https://www.youtube.com/watch?v=YJ3QuchrUNA", "https://www.youtube.com/watch?v=frEU93hI6co");

INSERT INTO tracks (track_name, track_description, stretch_vid, cardio_vid, workout_vid, nutrition_vid)
VALUES ("Titan", "Much like a giant in appearance. You are powerful and sturdy, and your physical achievemnts cannot be ignored.", "https://www.youtube.com/watch?v=RVq0X3XnKmE", "https://www.youtube.com/watch?v=qzymPet0Fl4", "https://www.youtube.com/watch?v=H_gU_cgyWt8", "https://www.youtube.com/watch?v=xxP5qb89prg");
