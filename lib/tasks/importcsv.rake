desc 'import csv sur sql'
task :importcsv => [ :environment ] do
    require 'csv'

    CSV.foreach('db.csv', headers: %i[nom_com num_com nom_iris code_iris pop lib_ci num_dep nom_dep num_reg nom_reg cp acc_intnum acc_inf global_acces comp_admin comp_numsco global_comp score_global moy_dept moy_reg]) do |row|
        Scorecommune.create(row.to_h)
    end
end