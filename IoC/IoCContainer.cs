using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.DependencyInjection;
using Blog.Models;

namespace Blog.IoC
{

    // A shorthand access class to get DI services with nice clean short code
    public static class IoC
    {
        // The scoped instance of the <see cref="BlogContext" />
        public static BlogContext BlogContext => IoCContainer.Provider.GetService<BlogContext>();
    }

    // The dependency injection container making use of the built in .Net Core service provider
    public class IoCContainer
    {
        public static IServiceProvider Provider { get; set; }
    }
}
