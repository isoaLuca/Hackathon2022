<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220310230800 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE data_reporting DROP FOREIGN KEY FK_32D3BAA979F37AE5');
        $this->addSql('DROP INDEX IDX_32D3BAA979F37AE5 ON data_reporting');
        $this->addSql('ALTER TABLE data_reporting ADD user_id INT NOT NULL, ADD finalreportingpath VARCHAR(100) DEFAULT NULL, ADD datareporting JSON DEFAULT NULL, DROP id_user_id, DROP filepath');
        $this->addSql('ALTER TABLE data_reporting ADD CONSTRAINT FK_32D3BAA9A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_32D3BAA9A76ED395 ON data_reporting (user_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE data_reporting DROP FOREIGN KEY FK_32D3BAA9A76ED395');
        $this->addSql('DROP INDEX IDX_32D3BAA9A76ED395 ON data_reporting');
        $this->addSql('ALTER TABLE data_reporting ADD id_user_id INT DEFAULT NULL, ADD filepath VARCHAR(250) DEFAULT NULL, DROP user_id, DROP finalreportingpath, DROP datareporting');
        $this->addSql('ALTER TABLE data_reporting ADD CONSTRAINT FK_32D3BAA979F37AE5 FOREIGN KEY (id_user_id) REFERENCES user (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_32D3BAA979F37AE5 ON data_reporting (id_user_id)');
    }
}
