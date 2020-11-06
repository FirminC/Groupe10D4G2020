class PageController < ApplicationController

    def index
        requete = "TRUE"
        if !(params[:cp].blank? || params[:cp].include?("="))
            requete += " AND (cp = #{params[:cp]})"
        end
        if !(params[:nom_dep].blank? || params[:nom_dep].include?("="))
            requete += " AND (nom_dep = '#{params[:nom_dep]}')"
        end
        if !(params[:nom_reg].blank? || params[:nom_reg].include?("="))
            requete += " AND (nom_reg = '#{params[:nom_reg]}')"
        end
        if !(params[:nom_reg].blank? || params[:nom_reg].include?("="))
            requete += " AND (nom_reg = '#{params[:nom_reg]}')"
        end
        @scorescommunes = Scorecommune.where(requete).page(params[:page]).per(200)
        @communes = Scorecommune.select("nom_com", "lib_ci", "nom_dep", "nom_reg").group("nom_com")
    end
end
