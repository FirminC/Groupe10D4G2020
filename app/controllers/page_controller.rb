class PageController < ApplicationController

    def index
        requete = "TRUE"
        if !params[:com].blank?
            requete += " AND insee_com = #{params[:com]}"
        end
        if !params[:dept].blank?
            requete += " AND insee_dep = #{params[:dept]}"
        end
        if !params[:reg].blank?
            requete += " AND insee_reg = #{params[:reg]}"
        end
        @scorescommunes = Scorecommune.where(requete).page(params[:page]).per(200)
        @comcoms = Scorecommune.select("nom_com").group("nom_com")
    end
end
