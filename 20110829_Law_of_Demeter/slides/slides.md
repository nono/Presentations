!SLIDE shout
# La loi de Déméter #

!SLIDE
# Définition formelle #
Toute méthode d'un objet peut simplement invoquer les méthodes des types suivants d'objets :

1. lui-même
2. ses paramètres
3. les objets qu'il crée/instancie
4. ses objets composants

!SLIDE
# Ou plus simplement #

> Ne parlez qu'à vos amis immédiats

!SLIDE
# Exemple #

```ruby
def user_info(user)
  "Name: #{user.name}. " +
    "Dept: #{user.department.try(:name)}"
end
```

!SLIDE
# Et pour tester #

```ruby
describe '#user_info' do
  subject { user_info(user) }
  let(:user) {
    stub('user', :name => "Bob",
                 :department => stub(:name => "Accounting",
                             :head => stub(:name => "Jack"))
         :position => stub(:title => "Senior Bean Counter"))
  }
  # examples...
end
```

!SLIDE
# Petit refactoring #

```ruby
class User
  delegate :name, :to => :department,
           :prefix => true, :allow_nil => true
end

def user_info(user)
  "Name: #{user.name}. Dept: #{user.department_name}"
end
```

!SLIDE
# Et pour les tests #

```ruby
describe '#user_info' do
  subject { user_info(user) }
  let(:user) {
    stub('user', :name => "Bob",
                 :department_name => "Accounting")
  }
  specify {
    subject.should match(/Dept: Accounting/)
  }
end
```

!SLIDE
# Et pour les appels chainés de méthodes ? #

```ruby
def slug(string)
  string.strip.downcase.tr_s('^[a-z0-9]', '-')
end
```

!SLIDE shout
# Conclusion #

