-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : jeu. 08 oct. 2026 à 08:57
-- Version du serveur : 9.7.1
-- Version de PHP : 8.3.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `trouve-ton-artisan`
--

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Alimentation'),
(2, 'Bâtiment'),
(3, 'Fabrication'),
(4, 'Services');

--
-- Déchargement des données de la table `cities`
--

INSERT INTO `cities` (`id`, `name`) VALUES
(1, 'Lyon'),
(2, 'Montélimar'),
(3, 'Evian'),
(4, 'Chamonix'),
(5, 'Bourg-en-bresse'),
(6, 'Vienne'),
(7, 'Aix-les-bains'),
(8, 'Annecy'),
(9, 'Le Puy-en-Velay'),
(10, 'Saint-Priest'),
(11, 'Chambéry'),
(12, 'Romans-sur-Isère'),
(13, 'Annonay'),
(14, 'Valence');

--
-- Déchargement des données de la table `craftsmen`
--

INSERT INTO `craftsmen` (`id`, `name`, `id_speciality`, `note`, `id_city`, `description`, `email`, `website`, `top`) VALUES
(1, 'Boucherie Dumont', 1, 4.5, 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'boucherie.dumond@gmail.com', '', 0),
(2, 'Au pain chaud', 2, 4.8, 2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'aupainchaud@hotmail.com', '', 1),
(3, 'Chocolaterie Labbé', 3, 4.9, 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'chocolaterie-labbe@gmail.com', 'https://chocolaterie-labbe.fr', 1),
(4, 'Traiteur Truchon', 4, 4.1, 1, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', 0),
(5, 'Orville Salmons', 5, 5, 3, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'o-salmons@live.com', '', 1),
(6, 'Mont Blanc Eléctricité', 6, 4.5, 4, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@mont-blanc-electricite.com', 'https://mont-blanc-electricite.com', 0),
(7, 'Boutot & fils', 7, 4.7, 5, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'boutot-menuiserie@gmail.com', 'https://boutot-menuiserie.com', 0),
(8, 'Vallis Bellemare', 8, 4, 6, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'v.bellemare@gmail.com', 'https://plomberie-bellemare.com', 0),
(9, 'Claude Quinn', 9, 4.2, 7, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'claude.quinn@gmail.com', '', 0),
(10, 'Amitee Lécuyer', 10, 4.5, 8, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'a.amitee@hotmail.com', 'https://lecuyer-couture.com', 0),
(11, 'Ernest Carignan', 11, 5, 9, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'e-carigan@hotmail.com', '', 0),
(12, 'Royden Charbonneau', 12, 3.8, 10, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'r.charbonneau@gmail.com', '', 0),
(13, 'Leala Dennis', 12, 3.8, 11, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'l.dennos@hotmail.fr', 'https://coiffure-leala-chambery.fr', 0),
(14, 'C\'est sup\'hair', 12, 4.1, 12, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'sup-hair@gmail.com', 'https://sup-hair.fr', 0),
(15, 'Le monde des fleurs', 13, 4.6, 13, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@le-monde-des-fleurs-annonay.fr', 'https://le-monde-des-fleurs-annonay.fr', 0),
(16, 'Valérie Laderoute', 14, 4.5, 14, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'v-laredoute@gmail.com', '', 0),
(17, 'CM Graphisme', 15, 4.4, 14, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin. ', 'contact@cm-graphisme.com', 'https://cm-graphisme.com', 0);

--
-- Déchargement des données de la table `specialities`
--

INSERT INTO `specialities` (`id`, `name`, `id_category`) VALUES
(1, 'Boucher', 1),
(2, 'Boulanger', 1),
(3, 'Chocolatier', 1),
(4, 'Traiteur', 1),
(5, 'Chauffagiste', 2),
(6, 'Electricien', 2),
(7, 'Menuisier', 2),
(8, 'Plombier', 2),
(9, 'Bijoutier', 3),
(10, 'Couturier', 3),
(11, 'Ferronier', 3),
(12, 'Coiffeur', 4),
(13, 'Fleuriste', 4),
(14, 'Toiletteur', 4),
(15, 'Webdesign', 4);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
