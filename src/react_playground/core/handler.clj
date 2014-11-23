(ns react-playground.core.handler
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [hiccup.core :as hiccup]))

(defn front-page []
	(hiccup/html [:body
		[:h1#headline.h1]
		[:script {:src "https://cdnjs.cloudflare.com/ajax/libs/react/0.12.1/react.min.js"}]
		[:script {:src "/public/js/greeter.js"}]]))

(defroutes app-routes
  (GET "/" [] (front-page))
  (route/resources "/public")
  (route/not-found "Not Found"))

(def app
  (wrap-defaults app-routes site-defaults))
