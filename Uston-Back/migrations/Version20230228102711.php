<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230228102711 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE recit_utilisateur (id INT AUTO_INCREMENT NOT NULL, projet_id INT NOT NULL, titre VARCHAR(255) NOT NULL, description LONGTEXT DEFAULT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', INDEX IDX_98EA15BC18272 (projet_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE recit_utilisateur_categorie (recit_utilisateur_id INT NOT NULL, categorie_id INT NOT NULL, INDEX IDX_65E34E02BBB427E7 (recit_utilisateur_id), INDEX IDX_65E34E02BCF5E72D (categorie_id), PRIMARY KEY(recit_utilisateur_id, categorie_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE recit_utilisateur ADD CONSTRAINT FK_98EA15BC18272 FOREIGN KEY (projet_id) REFERENCES projet (id)');
        $this->addSql('ALTER TABLE recit_utilisateur_categorie ADD CONSTRAINT FK_65E34E02BBB427E7 FOREIGN KEY (recit_utilisateur_id) REFERENCES recit_utilisateur (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE recit_utilisateur_categorie ADD CONSTRAINT FK_65E34E02BCF5E72D FOREIGN KEY (categorie_id) REFERENCES categorie (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE recit_utilisateur DROP FOREIGN KEY FK_98EA15BC18272');
        $this->addSql('ALTER TABLE recit_utilisateur_categorie DROP FOREIGN KEY FK_65E34E02BBB427E7');
        $this->addSql('ALTER TABLE recit_utilisateur_categorie DROP FOREIGN KEY FK_65E34E02BCF5E72D');
        $this->addSql('DROP TABLE recit_utilisateur');
        $this->addSql('DROP TABLE recit_utilisateur_categorie');
        $this->addSql('ALTER TABLE categorie DROP FOREIGN KEY FK_497DD634C18272');
        $this->addSql('ALTER TABLE categorie ADD CONSTRAINT FK_497DD634C18272 FOREIGN KEY (projet_id) REFERENCES projet (id) ON DELETE CASCADE');
        $this->addSql('CREATE UNIQUE INDEX projet_id ON categorie (projet_id, libelle)');
        $this->addSql('CREATE UNIQUE INDEX libelle ON technologie (libelle)');
    }
}
