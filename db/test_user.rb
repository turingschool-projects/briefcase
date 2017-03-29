  def clean_users
    User.delete_all
  end

  def create_users_and_portfolios
    puts 'Start adding test users and test portfolios...'
    puts 'Empty Users table'
    clean_users
    puts 'Adding test users first...'
    user1 = User.create(first_name: 'Leslie', last_name: 'Hawk', email: 'example@example.com')
    user2 = User.create(first_name: 'Joe', last_name: 'Henry', email: 'example@example.com')
    user3 = User.create(first_name: 'Jack', last_name: 'Donley', email: 'example@example.com')
    user4 = User.create(first_name: 'Greg', last_name: 'Maker', email: 'example@example.com')
    user5 = User.create(first_name: 'Sue', last_name: 'Anne', email: 'example@example.com')
    user6 = User.create(first_name: 'Sally', last_name: 'May', email: 'example@example.com')

    puts 'Adding test portfolios...'
    user1.create_portfolio(full_name: 'Leslie Hawk', email: 'example@example.com', github_url: 'github.com', linkedin_url: 'linkedin.com', bio: 'I like cars', title: 'Software Developer')
    user2.create_portfolio(full_name: 'Joe Henry', email: 'example@example.com', github_url: 'github.com', linkedin_url: 'linkedin.com', bio: 'I like cars', title: 'Software Developer')
    user3.create_portfolio(full_name: 'Jack Donley', email: 'example@example.com', github_url: 'github.com', linkedin_url: 'linkedin.com', bio: 'I like cars', title: 'Software Developer')
    user4.create_portfolio(full_name: 'Greg Maker', email: 'example@example.com', github_url: 'github.com', linkedin_url: 'linkedin.com', bio: 'I like cars', title: 'Software Developer')
    user5.create_portfolio(full_name: 'Sue Anne', email: 'example@example.com', github_url: 'github.com', linkedin_url: 'linkedin.com', bio: 'I like cars', title: 'Software Developer')
    user6.create_portfolio(full_name: 'Sally May', email: 'example@example.com', github_url: 'github.com', linkedin_url: 'linkedin.com', bio: 'I like cars', title: 'Software Developer')
    puts 'Finished adding test users and test portfolios...'
  end