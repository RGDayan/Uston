<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230108180626 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE categorie (id INT AUTO_INCREMENT NOT NULL, projet_id INT NOT NULL, libelle VARCHAR(255) NOT NULL, code_couleur VARCHAR(7) NOT NULL, INDEX IDX_497DD634C18272 (projet_id), UNIQUE (projet_id, libelle), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE categorie ADD CONSTRAINT FK_497DD634C18272 FOREIGN KEY (projet_id) REFERENCES projet (id) ON DELETE CASCADE ');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE technologie_projet DROP FOREIGN KEY FK_50A53358261A27D2');
        $this->addSql('ALTER TABLE technologie_projet DROP FOREIGN KEY FK_50A53358C18272');
        $this->addSql('DROP TABLE technologie');
        $this->addSql('DROP TABLE technologie_projet');
        $this->addSql('ALTER TABLE categorie DROP FOREIGN KEY FK_497DD634C18272');
    }
}
