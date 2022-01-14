DROP TABLE IF EXISTS post_item_types;
-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE SEQUENCE post_item_types_seq;

CREATE TABLE post_item_types (
  id int NOT NULL DEFAULT NEXTVAL ('post_item_types_seq'),
  name varchar(255) DEFAULT NULL,
  created_at timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  deleted_at timestamp(0) DEFAULT NULL,
  PRIMARY KEY (id)
)   ;

ALTER SEQUENCE post_item_types_seq RESTART WITH 5;

DROP TABLE IF EXISTS post_items;
-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE SEQUENCE post_items_seq;

CREATE TABLE post_items (
  id int NOT NULL DEFAULT NEXTVAL ('post_items_seq'),
  post_id int DEFAULT NULL,
  post_item_type_id int DEFAULT NULL,
  created_at timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  deleted_at timestamp(0) DEFAULT NULL,
  data varchar(255) NOT NULL,
  PRIMARY KEY (id)
 ,
  CONSTRAINT post_items_ibfk_1 FOREIGN KEY (post_id) REFERENCES posts (id),
  CONSTRAINT post_items_ibfk_2 FOREIGN KEY (post_item_type_id) REFERENCES post_item_types (id)
)   ;

ALTER SEQUENCE post_items_seq RESTART WITH 4;

CREATE INDEX post_content_id ON post_items (post_id);
CREATE INDEX post_item_type_id ON post_items (post_item_type_id);

DROP TABLE IF EXISTS post_reaction_types;
-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE SEQUENCE post_reaction_types_seq;

CREATE TABLE post_reaction_types (
  id int NOT NULL DEFAULT NEXTVAL ('post_reaction_types_seq'),
  name varchar(255) NOT NULL,
  created_at timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  deleted_at timestamp(0) DEFAULT NULL,
  PRIMARY KEY (id)
)   ;

ALTER SEQUENCE post_reaction_types_seq RESTART WITH 5;

DROP TABLE IF EXISTS post_reactions;
-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE SEQUENCE post_reactions_seq;

CREATE TABLE post_reactions (
  id int NOT NULL DEFAULT NEXTVAL ('post_reactions_seq'),
  post_reaction_type_id int NOT NULL,
  post_id int NOT NULL,
  created_at timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  deleted_at timestamp(0) DEFAULT NULL,
  user_id int NOT NULL,
  PRIMARY KEY (id)
 ,
  CONSTRAINT post_reactions_ibfk_1 FOREIGN KEY (post_reaction_type_id) REFERENCES post_reaction_types (id),
  CONSTRAINT post_reactions_ibfk_2 FOREIGN KEY (post_id) REFERENCES posts (id),
  CONSTRAINT post_reactions_ibfk_3 FOREIGN KEY (user_id) REFERENCES users (id)
)   ;

ALTER SEQUENCE post_reactions_seq RESTART WITH 3;

CREATE INDEX post_reaction_type_id ON post_reactions (post_reaction_type_id);
CREATE INDEX post_id ON post_reactions (post_id);
CREATE INDEX user_id ON post_reactions (user_id);

DROP TABLE IF EXISTS posts;
-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE SEQUENCE posts_seq;

CREATE TABLE posts (
  id int NOT NULL DEFAULT NEXTVAL ('posts_seq'),
  user_id int DEFAULT NULL,
  created_at timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  deleted_at timestamp(0) DEFAULT NULL,
  location point DEFAULT NULL,
  thread_post_id int DEFAULT NULL,
  PRIMARY KEY (id)
 ,
  CONSTRAINT posts_ibfk_1 FOREIGN KEY (user_id) REFERENCES users (id),
  CONSTRAINT posts_ibfk_2 FOREIGN KEY (thread_post_id) REFERENCES posts (id)
)   ;

ALTER SEQUENCE posts_seq RESTART WITH 3;

CREATE INDEX user_id ON posts (user_id);
CREATE INDEX thread_post_id ON posts (thread_post_id);

DROP TABLE IF EXISTS users;
-- SQLINES LICENSE FOR EVALUATION USE ONLY
CREATE SEQUENCE users_seq;

CREATE TABLE users (
  id int NOT NULL DEFAULT NEXTVAL ('users_seq'),
  username varchar(255) NOT NULL,
  created_at timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  deleted_at timestamp(0) DEFAULT NULL,
  email varchar(255) CHARACTER SET utf8mb4 DEFAULT NULL,
  password varchar(60) NOT NULL,
  PRIMARY KEY (id)
)   ;

ALTER SEQUENCE users_seq RESTART WITH 3;