require 'csv'
class Seed
  def self.start
    seed = Seed.new
    seed.create_locations
  end

  def create_locations
    load_csv_data('./list_of_largest_cities_of_us.csv').each do |row|
      Location.create(city: row[:city], state: row[:state], location: row[:location])
    end
  end

  def load_csv_data(filename)
    csv = CSV.open(filename, headers: true, header_converters: :symbol)
    csv.to_a.map { |row| row.to_h }
  end

  Seed.start
end
