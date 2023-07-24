CREATE TABLE `Project`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `project_name` VARCHAR(255) NOT NULL,
    `status` VARCHAR(255) NOT NULL,
    `start_date` DATE NOT NULL,
    `end_date` DATE NOT NULL,
    `portfolio_manager_id` BIGINT NOT NULL FOREIGN KEY
);
CREATE TABLE `Task`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `task_name` VARCHAR(255) NOT NULL,
    `status` VARCHAR(255) NOT NULL,
    `start_date` DATE NOT NULL,
    `end_date` DATE NOT NULL,
    `project_id` BIGINT NOT NULL FOREIGN KEY
);
CREATE TABLE `PortfolioManager`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `role` VARCHAR(255) NOT NULL,
    `bio` TEXT NOT NULL,
    `start_date` DATE NOT NULL
);
CREATE TABLE `Resource`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `resource_name` VARCHAR(255) NOT NULL,
    `start_date` DATE NOT NULL,
    `task_id` BIGINT NOT NULL FOREIGN KEY
);
ALTER TABLE
    `Project` ADD CONSTRAINT `project_portfolio_manager_id_foreign` FOREIGN KEY(`portfolio_manager_id`) REFERENCES `PortfolioManager`(`id`);
ALTER TABLE
    `Task` ADD CONSTRAINT `task_project_id_foreign` FOREIGN KEY(`project_id`) REFERENCES `Project`(`id`);
ALTER TABLE
    `Resource` ADD CONSTRAINT `resource_task_id_foreign` FOREIGN KEY(`task_id`) REFERENCES `Task`(`id`);