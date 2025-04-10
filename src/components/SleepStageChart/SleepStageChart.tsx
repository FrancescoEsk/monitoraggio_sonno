import { Scatter } from '@antv/g2plot';
import React, { useEffect } from 'react';






function CreateScatterPlot() {

    type Dati = { Timestamp: string; 'Sleep Stage': string }[];
    const dati: Dati = [
        {
            "Timestamp": "0",
            "Sleep Stage": "Awake"
        },
        {
            "Timestamp": "0",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "0",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "0",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 00:31:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 00:32:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 00:33:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 00:34:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 00:35:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 00:36:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 00:37:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 00:38:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 00:39:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 00:40:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 00:41:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 00:42:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 00:43:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 00:44:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 00:45:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 00:46:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 00:47:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 00:48:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 00:49:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 00:50:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 00:51:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 00:52:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 00:53:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 00:54:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 00:55:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 00:56:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 00:57:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 00:58:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 00:59:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:00:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:01:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:02:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:03:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:04:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:05:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:06:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:07:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:08:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:09:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:10:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:11:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:12:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:13:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:14:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:15:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:16:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:17:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:18:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:19:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:20:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:21:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:22:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:23:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:24:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:25:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:26:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:27:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:28:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:29:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:30:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:31:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:32:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:33:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:34:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:35:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:36:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:37:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:38:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:39:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:40:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:41:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:42:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:43:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:44:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:45:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:46:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:47:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:48:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:49:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:50:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:51:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:52:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:53:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:54:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:55:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:56:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:57:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:58:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 01:59:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:00:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:01:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:02:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:03:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:04:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:05:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:06:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:07:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:08:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:09:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:10:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:11:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:12:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:13:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:14:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:15:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:16:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:17:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:18:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:19:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:20:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:21:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:22:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:23:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:24:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:25:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:26:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:27:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:28:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:29:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:30:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:31:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:32:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:33:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:34:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:35:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:36:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:37:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:38:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:39:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:40:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:41:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:42:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:43:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:44:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:45:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:46:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:47:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:48:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:49:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:50:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:51:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:52:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:53:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:54:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:55:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:56:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:57:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:58:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 02:59:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:00:00",
            "Sleep Stage": "Awake"
        },
        {
            "Timestamp": "2025-02-11 03:01:00",
            "Sleep Stage": "Awake"
        },
        {
            "Timestamp": "2025-02-11 03:02:00",
            "Sleep Stage": "Awake"
        },
        {
            "Timestamp": "2025-02-11 03:03:00",
            "Sleep Stage": "Awake"
        },
        {
            "Timestamp": "2025-02-11 03:04:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:05:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:06:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:07:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:08:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:09:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:10:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:11:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:12:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:13:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:14:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:15:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:16:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:17:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:18:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:19:00",
            "Sleep Stage": "Awake"
        },
        {
            "Timestamp": "2025-02-11 03:20:00",
            "Sleep Stage": "Awake"
        },
        {
            "Timestamp": "2025-02-11 03:21:00",
            "Sleep Stage": "Awake"
        },
        {
            "Timestamp": "2025-02-11 03:22:00",
            "Sleep Stage": "Awake"
        },
        {
            "Timestamp": "2025-02-11 03:23:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:24:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:25:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:26:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:27:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:28:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:29:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:30:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:31:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:32:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:33:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:34:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:35:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:36:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:37:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:38:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:39:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:40:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:41:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:42:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:43:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:44:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:45:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:46:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:47:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:48:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:49:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:50:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:51:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 03:52:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 03:53:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 03:54:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 03:55:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 03:56:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 03:57:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 03:58:00",
            "Sleep Stage": "Awake"
        },
        {
            "Timestamp": "2025-02-11 03:59:00",
            "Sleep Stage": "Awake"
        },
        {
            "Timestamp": "2025-02-11 04:00:00",
            "Sleep Stage": "Awake"
        },
        {
            "Timestamp": "2025-02-11 04:01:00",
            "Sleep Stage": "Awake"
        },
        {
            "Timestamp": "2025-02-11 04:02:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 04:03:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 04:04:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 04:05:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 04:06:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 04:07:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 04:08:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 04:09:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 04:10:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 04:11:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 04:12:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 04:13:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 04:14:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 04:15:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 04:16:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 04:17:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 04:18:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 04:19:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 04:20:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 04:21:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 04:22:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 04:23:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 04:24:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 04:25:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 04:26:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 04:27:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 04:28:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 04:29:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 04:30:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 04:31:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 04:32:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 04:33:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 04:34:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 04:35:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 04:36:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 04:37:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 04:38:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 04:39:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 04:40:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 04:41:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 04:42:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 04:43:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 04:44:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 04:45:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 04:46:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 04:47:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 04:48:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 04:49:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 04:50:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 04:51:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 04:52:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 04:53:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 04:54:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 04:55:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 04:56:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 04:57:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 04:58:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 04:59:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:00:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:01:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:02:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:03:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:04:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:05:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:06:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:07:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:08:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:09:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:10:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:11:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:12:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:13:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:14:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:15:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 05:16:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 05:17:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 05:18:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 05:19:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 05:20:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 05:21:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 05:22:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 05:23:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 05:24:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:25:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:26:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:27:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:28:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:29:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:30:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:31:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:32:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:33:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:34:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:35:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:36:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:37:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:38:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:39:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:40:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:41:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:42:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:43:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:44:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:45:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:46:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:47:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:48:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:49:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:50:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:51:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:52:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:53:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:54:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:55:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:56:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:57:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:58:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 05:59:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 06:00:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 06:01:00",
            "Sleep Stage": "REM"
        },
        {
            "Timestamp": "2025-02-11 06:02:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 06:03:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 06:04:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 06:05:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 06:06:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 06:07:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 06:08:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 06:09:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 06:10:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 06:11:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 06:12:00",
            "Sleep Stage": "Awake"
        },
        {
            "Timestamp": "2025-02-11 06:13:00",
            "Sleep Stage": "Awake"
        },
        {
            "Timestamp": "2025-02-11 06:14:00",
            "Sleep Stage": "Awake"
        },
        {
            "Timestamp": "2025-02-11 06:15:00",
            "Sleep Stage": "Awake"
        },
        {
            "Timestamp": "2025-02-11 06:16:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 06:17:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 06:18:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 06:19:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 06:20:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 06:21:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 06:22:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 06:23:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 06:24:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 06:25:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 06:26:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 06:27:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 06:28:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 06:29:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 06:30:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 06:31:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 06:32:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 06:33:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 06:34:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 06:35:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 06:36:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 06:37:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 06:38:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 06:39:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 06:40:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 06:41:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 06:42:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 06:43:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 06:44:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 06:45:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 06:46:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 06:47:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 06:48:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 06:49:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 06:50:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 06:51:00",
            "Sleep Stage": "Deep"
        },
        {
            "Timestamp": "2025-02-11 06:52:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 06:53:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 06:54:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 06:55:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 06:56:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 06:57:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 06:58:00",
            "Sleep Stage": "Light"
        },
        {
            "Timestamp": "2025-02-11 06:59:00",
            "Sleep Stage": "Light"
        }
    ]


    useEffect(() => {
        const scatterPlot = new Scatter('container', {
            data: dati.map(item => ({
                Timestamp: item['Timestamp'].split(' ')[1],
                'Sleep': item['Sleep Stage']
            })),
            color: ["#FF8042", "lightskyblue", "royalblue", "blue"],
            xField: 'Timestamp',
            yField: 'Sleep',
            size: 5,
            colorField: 'Sleep',
            shape: 'circle',
            pointStyle: {
                fillOpacity: 0.8,
                stroke: null, // Removed stroke
            },

            legend: false,
            yAxis: {
                nice: true,
                line: {
                    style: {
                        stroke: '#aaa',
                    },
                },
            },

        });

        scatterPlot.render();

        return () => {
            scatterPlot.destroy();
        };
    }, []);

    return (
        <div>
            <div id="container" style={{ padding: "5px", width: "90vw" }}></div>
        </div>
    );
}




export default CreateScatterPlot;