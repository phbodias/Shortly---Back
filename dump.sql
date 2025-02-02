--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4 (Ubuntu 14.4-1.pgdg20.04+1)
-- Dumped by pg_dump version 14.4 (Ubuntu 14.4-1.pgdg20.04+1)

-- Started on 2022-08-08 15:54:26 -03

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 6 (class 2615 OID 12671520)
-- Name: heroku_ext; Type: SCHEMA; Schema: -; Owner: u4g6urpsqjvms3
--

CREATE SCHEMA heroku_ext;


ALTER SCHEMA heroku_ext OWNER TO u4g6urpsqjvms3;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 213 (class 1259 OID 12893609)
-- Name: urls; Type: TABLE; Schema: public; Owner: qowxshtkfqavwa
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    "userId" integer,
    "shortUrl" text NOT NULL,
    url text NOT NULL,
    "visitCount" integer DEFAULT 0 NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.urls OWNER TO qowxshtkfqavwa;

--
-- TOC entry 212 (class 1259 OID 12893608)
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: qowxshtkfqavwa
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.urls_id_seq OWNER TO qowxshtkfqavwa;

--
-- TOC entry 4320 (class 0 OID 0)
-- Dependencies: 212
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: qowxshtkfqavwa
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- TOC entry 211 (class 1259 OID 12883559)
-- Name: users; Type: TABLE; Schema: public; Owner: qowxshtkfqavwa
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    password text NOT NULL,
    "createdAt" timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.users OWNER TO qowxshtkfqavwa;

--
-- TOC entry 210 (class 1259 OID 12883558)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: qowxshtkfqavwa
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO qowxshtkfqavwa;

--
-- TOC entry 4321 (class 0 OID 0)
-- Dependencies: 210
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: qowxshtkfqavwa
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- TOC entry 4159 (class 2604 OID 12893612)
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: qowxshtkfqavwa
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- TOC entry 4157 (class 2604 OID 12883562)
-- Name: users id; Type: DEFAULT; Schema: public; Owner: qowxshtkfqavwa
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- TOC entry 4311 (class 0 OID 12893609)
-- Dependencies: 213
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: qowxshtkfqavwa
--

COPY public.urls (id, "userId", "shortUrl", url, "visitCount", "createdAt") FROM stdin;
1	8	CN88YwhJlIzCXbouTYS6D	https://bootcampra.notion.site/Projeto-Shortly-API-4ffa110c0ebd4e83ad7302cfafd33133	1	2022-08-08 02:35:43.703254+00
3	8	jEvOWjxibPguApYsevzoq	https://bootcampra.notion.site/Projeto-Shortly-API-4ffa110c0ebd4e83ad7302cfafd33133	0	2022-08-08 02:37:48.332496+00
5	8	pQmTzPWra-Hffo79RhFsc	https://bootcampra.notion.site/Projeto-Shortly-API-4ffa110c0ebd4e83ad7302cfafd33133	0	2022-08-08 02:37:50.222178+00
7	1	-D9Fmz7gCO-0bipk5ovno	https://bootcampra.notion.site/Projeto-Shortly-API-4ffa110c0ebd4e83ad7302cfafd33133	0	2022-08-08 02:39:09.709055+00
9	1	APydUfQgIpZukXHvR4p8w	https://bootcampra.notion.site/Projeto-Shortly-API-4ffa110c0ebd4e83ad7302cfafd33133	0	2022-08-08 02:39:11.333924+00
11	1	U0mXLIkhA9w45S8Fpmag9	https://bootcampra.notion.site/Projeto-Shortly-API-4ffa110c0ebd4e83ad7302cfafd33133	0	2022-08-08 02:39:13.596672+00
12	1	XNSdjLPtqNqMgU1U-m1OF	https://bootcampra.notion.site/Projeto-Shortly-API-4ffa110c0ebd4e83ad7302cfafd33133	0	2022-08-08 02:39:14.534149+00
13	1	9A6QhOJxRM3GUznqvwxQz	https://bootcampra.notion.site/Projeto-Shortly-API-4ffa110c0ebd4e83ad7302cfafd33133	0	2022-08-08 02:39:15.450518+00
14	1	Tt5xVm8tAwPzWhQL6nU0i	https://bootcampra.notion.site/Projeto-Shortly-API-4ffa110c0ebd4e83ad7302cfafd33133	6	2022-08-08 02:39:16.512004+00
16	4	KcV0MLZtk1Y9oT9CMSuJf	https://github.com/phbodias	0	2022-08-08 14:31:27.27582+00
17	4	ef5kTmXylKchc8AY-t-_1	https://github.com/phbodias	2	2022-08-08 14:31:28.40276+00
2	8	D5Quw2is0kL3B4IQ7h0D_	https://bootcampra.notion.site/Projeto-Shortly-API-4ffa110c0ebd4e83ad7302cfafd33133	7	2022-08-08 02:37:46.90805+00
15	4	K_BD6UdydYskKcB17wQ6K	https://github.com/phbodias	1	2022-08-08 14:31:24.257227+00
\.


--
-- TOC entry 4309 (class 0 OID 12883559)
-- Dependencies: 211
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: qowxshtkfqavwa
--

COPY public.users (id, name, email, password, "createdAt") FROM stdin;
1	Pedro	pedro@gmail.com	$2b$10$iOQZNNO6D/pF6HsFvvRycuAf5Vw5tenTbosnpEXWN3MChr/sW34DK	2022-08-08 02:13:46.018183+00
2	Bruno	bruno@gmail.com	$2b$10$.17H0CYa70f4CgK8PvmXje1Xg47qcRVi9EWBTv6AwqwLNyWHrh5MS	2022-08-08 02:14:20.325025+00
3	joaozinho	jao@gmail.com	$2b$10$5iTg8LE63wWayUKxz7akA.qjb2xZbsCqGKtDOi1/OP9ypoFGgYKd2	2022-08-08 02:14:34.141914+00
4	lara	lara@gmail.com	$2b$10$VJuO7gIgHdgzUf678pGKLeMbTwN3vHRQpbapisp/oNDfWyhHDH.rG	2022-08-08 02:14:41.868634+00
5	olivia	olivia@gmail.com	$2b$10$lAjvZyQ9eAY9jO2fWf5jweyICJ2hyCUAK9.JSuwhwKsGhirdAVcaa	2022-08-08 02:14:51.692795+00
6	hygo	hygo@gmail.com	$2b$10$TLlh/s8Ju7jOaeqb/1iCP.Prdx6V7V9GxMYVw/YwYwKHN0Ymf6VsC	2022-08-08 02:14:59.622169+00
7	josé	jose@gmail.com	$2b$10$y6WQUwoSlUKnVHiM2epvIuzNx3JGH6iMYGeoxAVuq4hqs86K9ZQ4i	2022-08-08 02:15:09.017439+00
8	jo	jo@gmail.com	$2b$10$wod6DvEr3j2DAvMej34nIeQ/7rFpZYbGP9NbSYKoHpXicvksSWUdO	2022-08-08 02:34:47.81129+00
9	joaquim	joaquim@gmail.com	$2b$10$f6YtjAnTdOtOxrJwnZ5MvuU0QTzgiHJFETdU.lKaWYVMC3NE7ivUm	2022-08-08 14:39:53.696384+00
\.


--
-- TOC entry 4322 (class 0 OID 0)
-- Dependencies: 212
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: qowxshtkfqavwa
--

SELECT pg_catalog.setval('public.urls_id_seq', 17, true);


--
-- TOC entry 4323 (class 0 OID 0)
-- Dependencies: 210
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: qowxshtkfqavwa
--

SELECT pg_catalog.setval('public.users_id_seq', 9, true);


--
-- TOC entry 4167 (class 2606 OID 12893618)
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: qowxshtkfqavwa
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- TOC entry 4163 (class 2606 OID 12883569)
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: qowxshtkfqavwa
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- TOC entry 4165 (class 2606 OID 12883567)
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: qowxshtkfqavwa
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- TOC entry 4168 (class 2606 OID 12893619)
-- Name: urls urls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: qowxshtkfqavwa
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- TOC entry 4317 (class 0 OID 0)
-- Dependencies: 6
-- Name: SCHEMA heroku_ext; Type: ACL; Schema: -; Owner: u4g6urpsqjvms3
--

GRANT USAGE ON SCHEMA heroku_ext TO qowxshtkfqavwa;


--
-- TOC entry 4318 (class 0 OID 0)
-- Dependencies: 5
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: qowxshtkfqavwa
--

REVOKE ALL ON SCHEMA public FROM postgres;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO qowxshtkfqavwa;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- TOC entry 4319 (class 0 OID 0)
-- Dependencies: 832
-- Name: LANGUAGE plpgsql; Type: ACL; Schema: -; Owner: postgres
--

GRANT ALL ON LANGUAGE plpgsql TO qowxshtkfqavwa;


-- Completed on 2022-08-08 15:54:38 -03

--
-- PostgreSQL database dump complete
--

