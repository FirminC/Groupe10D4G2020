desc 'import csv sur sql'
task :importcsv => [ :environment ] do
    require 'csv'    
    for i in 0..20 do
        CSV.foreach('db.csv', headers: %i[nom_com insee_com insee_dep nom_dep insee_reg poplegal accintnum accinf global_acces comp_admin comp_numsco global_comp score_global]) do |row|
            Scorecommune.create(row.to_h)
        end
    end
end