using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.EntityFrameworkCore;
using Estacionamento.BO;
using Estacionamento.BO.Interfaces;
using Estacionamento.DAO;
using Estacionamento.DAO.Repository;
using Estacionamento.DAO.Repository.Interfaces;

namespace Estacionamento.API
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.AddDbContext<DbContextEstacionamento>(options => options.UseMySql(Configuration.GetConnectionString("DBPadraoMySql")));
            
            services.AddScoped<IVeiculoRepository, VeiculoRepository>();
            services.AddScoped<IEstacionamentoRepository, EstacionamentoRepository>();
            services.AddScoped<IPrecoRepository, PrecoRepository>();

            services.AddScoped<IEstacionamentoBO, EstacionamentoBO>();
            services.AddScoped<IVeiculoBO, VeiculoBO>();
            services.AddScoped<IPrecoBO, PrecoBO>();

            services.AddCors(x => x.AddPolicy("MyPolicy", builder =>
            {
                builder.AllowAnyOrigin()
                       .AllowAnyMethod()
                       .AllowAnyHeader();
            }));
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseCors("MyPolicy");

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
