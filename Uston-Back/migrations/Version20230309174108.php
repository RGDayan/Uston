<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230309174108 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE suggestion (id INT AUTO_INCREMENT NOT NULL, projet_id INT NOT NULL, titre VARCHAR(255) NOT NULL, description LONGTEXT DEFAULT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_DD80F31BC18272 (projet_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE suggestion_categorie (suggestion_id INT NOT NULL, categorie_id INT NOT NULL, INDEX IDX_EDFB1536A41BB822 (suggestion_id), INDEX IDX_EDFB1536BCF5E72D (categorie_id), PRIMARY KEY(suggestion_id, categorie_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE suggestion ADD CONSTRAINT FK_DD80F31BC18272 FOREIGN KEY (projet_id) REFERENCES projet (id)');
        $this->addSql('ALTER TABLE suggestion_categorie ADD CONSTRAINT FK_EDFB1536A41BB822 FOREIGN KEY (suggestion_id) REFERENCES suggestion (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE suggestion_categorie ADD CONSTRAINT FK_EDFB1536BCF5E72D FOREIGN KEY (categorie_id) REFERENCES categorie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE categorie DROP FOREIGN KEY FK_497DD634C18272');
        $this->addSql('ALTER TABLE categorie ADD CONSTRAINT FK_497DD634C18272 FOREIGN KEY (projet_id) REFERENCES projet (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE suggestion DROP FOREIGN KEY FK_DD80F31BC18272');
        $this->addSql('ALTER TABLE suggestion_categorie DROP FOREIGN KEY FK_EDFB1536A41BB822');
        $this->addSql('ALTER TABLE suggestion_categorie DROP FOREIGN KEY FK_EDFB1536BCF5E72D');
        $this->addSql('DROP TABLE suggestion');
        $this->addSql('DROP TABLE suggestion_categorie');
        $this->addSql('ALTER TABLE categorie DROP FOREIGN KEY FK_497DD634C18272');
        $this->addSql('ALTER TABLE categorie ADD CONSTRAINT FK_497DD634C18272 FOREIGN KEY (projet_id) REFERENCES projet (id) ON DELETE CASCADE');
        $this->addSql('CREATE UNIQUE INDEX projet_id ON categorie (projet_id, libelle)');
        $this->addSql('CREATE UNIQUE INDEX libelle ON technologie (libelle)');
    }
}
