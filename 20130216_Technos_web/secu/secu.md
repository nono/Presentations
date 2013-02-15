!SLIDE
# Comptes utilisateurs #

* Beaucoup d'attaques possibles
* Ne réinventez pas la roue
* Utilisez Devise pour Rails

!SLIDE
# Injections SQL #

```ruby
@user = User.where("login='#{login}'" +
                   "AND password='#{password}'"
                  ).first
```

Que se passe-t-il si l'utilisateur saisit `"Joe' ; -"` comme login ?

!SLIDE
# Injections SQL (2) #

```sql
SELECT *
FROM users
WHERE login='Joe'; --'
AND password='xxxx'
LIMIT 1;
```

!SLIDE
# Injections SQL (3) #

La solution :

```ruby
@user = User.where(login: login, password: password).first
```

!SLIDE
# Attaques XSS #

```erb
<%= @comment.body %>
```

Que se passe-t-il si body contient `<iframe src="http://goat.sx"></iframe>` ?

!SLIDE
# Mais ça ne suffit pas ! #

Ne faites pas l'erreur de croire qu'appliquer ces bonnes pratiques vous
protégera à tout jamais des attaques. Les attaques évoluent, préparez-vous :
veille, mises à jour, revues de code, sécurité en profondeur, etc.

⇒ La sécurité est un processus, pas un état

!SLIDE
# À lire ! #

Le guide Rails sur la sécurité

http://guides.rubyonrails.org/security.html
