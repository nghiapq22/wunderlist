-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th7 09, 2020 lúc 09:09 AM
-- Phiên bản máy phục vụ: 10.1.36-MariaDB
-- Phiên bản PHP: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `wunderlist`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `comment`
--

CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `taskId` int(11) NOT NULL,
  `createDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `createBy` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `comment`
--

INSERT INTO `comment` (`id`, `title`, `taskId`, `createDate`, `createBy`) VALUES
(1, 'fsdfd', 540, '2020-04-01 08:03:31', ''),
(2, 'fsd', 540, '2020-04-01 08:03:32', '');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `file`
--

CREATE TABLE `file` (
  `id` int(11) NOT NULL,
  `fileId` int(11) NOT NULL,
  `title` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `information`
--

CREATE TABLE `information` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `dateofbirth` datetime NOT NULL,
  `sex` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `language`
--

CREATE TABLE `language` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `list`
--

CREATE TABLE `list` (
  `id` int(11) NOT NULL,
  `title` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `list`
--

INSERT INTO `list` (`id`, `title`) VALUES
(151, 'xem phim'),
(154, 'hoc'),
(155, 'hoc 3');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `status` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `subtask`
--

CREATE TABLE `subtask` (
  `id` int(11) NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `taskId` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `subtask`
--

INSERT INTO `subtask` (`id`, `title`, `taskId`, `status`) VALUES
(8, 'nghaaa', 533, 0),
(9, '552', 534, 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `task`
--

CREATE TABLE `task` (
  `id` int(11) NOT NULL,
  `title` varchar(50) DEFAULT NULL,
  `status` tinyint(1) NOT NULL,
  `star` tinyint(1) DEFAULT NULL,
  `createDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `createBy` varchar(50) DEFAULT NULL,
  `modifyBy` varchar(50) DEFAULT NULL,
  `listId` int(11) NOT NULL,
  `setDueDate` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `task`
--

INSERT INTO `task` (`id`, `title`, `status`, `star`, `createDate`, `createBy`, `modifyBy`, `listId`, `setDueDate`) VALUES
(533, 'nghia', 0, NULL, '2020-06-01 12:19:24', NULL, NULL, 151, '0000-00-00 00:00:00'),
(534, 'quang nghia', 0, NULL, '2020-06-01 12:19:30', NULL, NULL, 151, '0000-00-00 00:00:00'),
(540, 'nam', 1, NULL, '2020-06-01 12:19:22', NULL, NULL, 151, '0000-00-00 00:00:00'),
(541, 'bai', 0, NULL, '2020-04-01 08:21:48', NULL, NULL, 154, '0000-00-00 00:00:00'),
(542, 'nam', 0, NULL, '2020-04-13 13:36:23', NULL, NULL, 154, '0000-00-00 00:00:00'),
(543, 'namdd', 0, NULL, '2020-04-01 12:28:27', NULL, NULL, 155, '0000-00-00 00:00:00'),
(546, 'tuÃ¡n', 0, NULL, '2020-06-04 09:18:55', NULL, NULL, 151, '0000-00-00 00:00:00'),
(547, 'Nguyen thi a', 0, NULL, '2020-06-22 07:03:55', NULL, NULL, 151, '0000-00-00 00:00:00'),
(548, 'Nguyen a', 0, NULL, '2020-06-22 07:04:01', NULL, NULL, 154, '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `user`
--

INSERT INTO `user` (`id`, `email`, `password`) VALUES
(17, 'nghia01@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b'),
(18, 'fdfdf@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b'),
(19, 'nghia03@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b'),
(20, 'quynumber@gmail.com', 'c4ca4238a0b923820dcc509a6f75849b');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_language`
--

CREATE TABLE `user_language` (
  `userId` int(11) NOT NULL,
  `languageId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_list`
--

CREATE TABLE `user_list` (
  `userId` int(11) NOT NULL,
  `listId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Đang đổ dữ liệu cho bảng `user_list`
--

INSERT INTO `user_list` (`userId`, `listId`) VALUES
(17, 151),
(17, 154),
(17, 155);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_role`
--

CREATE TABLE `user_role` (
  `roleId` int(11) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `comment_ibfk_1` (`taskId`);

--
-- Chỉ mục cho bảng `file`
--
ALTER TABLE `file`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fileId` (`fileId`);

--
-- Chỉ mục cho bảng `information`
--
ALTER TABLE `information`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `language`
--
ALTER TABLE `language`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `list`
--
ALTER TABLE `list`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `subtask`
--
ALTER TABLE `subtask`
  ADD PRIMARY KEY (`id`),
  ADD KEY `subtask_ibfk_1` (`taskId`);

--
-- Chỉ mục cho bảng `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id`),
  ADD KEY `task_ibfk_1` (`listId`);

--
-- Chỉ mục cho bảng `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `user_language`
--
ALTER TABLE `user_language`
  ADD PRIMARY KEY (`userId`,`languageId`),
  ADD KEY `languageId` (`languageId`);

--
-- Chỉ mục cho bảng `user_list`
--
ALTER TABLE `user_list`
  ADD PRIMARY KEY (`userId`,`listId`),
  ADD KEY `user_list_ibfk_1` (`listId`);

--
-- Chỉ mục cho bảng `user_role`
--
ALTER TABLE `user_role`
  ADD KEY `roleId` (`roleId`),
  ADD KEY `userId` (`userId`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `comment`
--
ALTER TABLE `comment`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `file`
--
ALTER TABLE `file`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `information`
--
ALTER TABLE `information`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `language`
--
ALTER TABLE `language`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `list`
--
ALTER TABLE `list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=156;

--
-- AUTO_INCREMENT cho bảng `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `subtask`
--
ALTER TABLE `subtask`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `task`
--
ALTER TABLE `task`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=549;

--
-- AUTO_INCREMENT cho bảng `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `comment`
--
ALTER TABLE `comment`
  ADD CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`taskId`) REFERENCES `task` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `file`
--
ALTER TABLE `file`
  ADD CONSTRAINT `file_ibfk_1` FOREIGN KEY (`fileId`) REFERENCES `task` (`id`);

--
-- Các ràng buộc cho bảng `information`
--
ALTER TABLE `information`
  ADD CONSTRAINT `information_ibfk_1` FOREIGN KEY (`id`) REFERENCES `user` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `subtask`
--
ALTER TABLE `subtask`
  ADD CONSTRAINT `subtask_ibfk_1` FOREIGN KEY (`taskId`) REFERENCES `task` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `task`
--
ALTER TABLE `task`
  ADD CONSTRAINT `task_ibfk_1` FOREIGN KEY (`listId`) REFERENCES `list` (`id`) ON DELETE CASCADE;

--
-- Các ràng buộc cho bảng `user_language`
--
ALTER TABLE `user_language`
  ADD CONSTRAINT `user_language_ibfk_1` FOREIGN KEY (`languageId`) REFERENCES `language` (`id`),
  ADD CONSTRAINT `user_language_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`id`);

--
-- Các ràng buộc cho bảng `user_list`
--
ALTER TABLE `user_list`
  ADD CONSTRAINT `user_list_ibfk_1` FOREIGN KEY (`listId`) REFERENCES `list` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_list_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`id`);

--
-- Các ràng buộc cho bảng `user_role`
--
ALTER TABLE `user_role`
  ADD CONSTRAINT `user_role_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `role` (`id`),
  ADD CONSTRAINT `user_role_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
