<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230302105706 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE etape (id INT AUTO_INCREMENT NOT NULL, recit_utilisateur_id INT NOT NULL, en_tant_que VARCHAR(255) NOT NULL, situation LONGTEXT NOT NULL, resultat LONGTEXT NOT NULL, INDEX IDX_285F75DDBBB427E7 (recit_utilisateur_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE etape ADD CONSTRAINT FK_285F75DDBBB427E7 FOREIGN KEY (recit_utilisateur_id) REFERENCES recit_utilisateur (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE etape DROP FOREIGN KEY FK_285F75DDBBB427E7');
        $this->addSql('DROP TABLE etape');
        $this->addSql('ALTER TABLE categorie DROP FOREIGN KEY FK_497DD634C18272');
        $this->addSql('ALTER TABLE categorie ADD CONSTRAINT FK_497DD634C18272 FOREIGN KEY (projet_id) REFERENCES projet (id) ON DELETE CASCADE');
        $this->addSql('CREATE UNIQUE INDEX projet_id ON categorie (projet_id, libelle)');
        $this->addSql('CREATE UNIQUE INDEX libelle ON technologie (libelle)');
    }
}
